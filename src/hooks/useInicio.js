import { useStaticQuery, graphql } from 'gatsby'

const useInicio = () => {
    const resultado = useStaticQuery(graphql`
    query {
        allStrapiInicio {
            nodes {
              texto
              imagen{
                localFile {
                  publicURL
                }
              }
            }
          }
        }
    `)
    return resultado.allStrapiInicio.nodes.map(inicio => ({
        texto:inicio.texto,
        imagen:inicio.imagen.localFile.publicURL
    }))
}

export default useInicio
