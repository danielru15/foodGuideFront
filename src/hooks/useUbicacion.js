import React,{useState} from 'react'
import { graphql , useStaticQuery } from 'gatsby'
import './usefiltro.css'

const useUbicacion = () => {
    const [ubicacion, setUbicacion] = useState('')
    const resultados = useStaticQuery(graphql`
    query {
        allStrapiUbicacion {
       
         nodes{
           nombre
           id
         }
       }
     
     }
    `)
 
    const ubicaciones = resultados.allStrapiUbicacion.nodes
 
     const FiltroUB = () => (
         <form>
             <select
                 onChange={e => setUbicacion(e.target.value)}
                 value={ubicacion}
             >
                 <option value="">--tods</option>
                 {ubicaciones.map(opcion => (
                     <option key={opcion.id} value={opcion.nombre}>{opcion.nombre}</option>
                 ))}
             </select>
             
            
         </form>
     )
     return {
         ubicacion,
         FiltroUB
     }
}

export default useUbicacion
