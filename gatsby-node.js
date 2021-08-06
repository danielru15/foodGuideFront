const urlSlug = require('url-slug')

exports.createPages = async({actions ,graphql , reporter }) => {
    const resultado = await graphql(`
    query {
        allStrapiRestaurantes {
          nodes {
            id
            nombre
          }
        }
      }
    `)
    // si no hay resultados
    if(resultado.errors) {
        reporter.panic('No hubo resultados', resultado.errors)
    }
    // si hay resultados generar los archivos estaticos
    const restaurantes = resultado.data.allStrapiRestaurantes.nodes

    // crear los templates 
    restaurantes.forEach(restaurante => {
        actions.createPage({
            path:urlSlug(restaurante.nombre),
            component: require.resolve('./src/components/restaurantes/RestaurantePreview.js'),
            context: {
                id:restaurante.id
            }
        })
        console.log(urlSlug(restaurante.nombre))
    });
}