import { useStaticQuery, graphql } from 'gatsby'


const useRestaurantes = () => {
    const resultado = useStaticQuery(graphql`
    query {
        allStrapiRestaurantes {
          nodes {
            id
            nombre
            calificacion
            descripcion
            precio
            categorias {
              nombre
            }
            ubicaciones {
              nombre
            }
            imagen {
             url
            }
          }
        }
      }
    `)
    return resultado.allStrapiRestaurantes.nodes
}

export default useRestaurantes
