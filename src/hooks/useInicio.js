import { useStaticQuery, graphql } from 'gatsby'

const useInicio = () => {
    const resultado = useStaticQuery(graphql`
    query {
        allStrapiInicio {
            nodes {
              texto
            }
          }
        }
    `)
    return resultado.allStrapiInicio.nodes.map(inicio => ({
        texto:inicio.texto,
    }))
}

export default useInicio
