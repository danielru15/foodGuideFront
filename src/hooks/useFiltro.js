import React, { useState } from 'react'
import { graphql , useStaticQuery } from 'gatsby'
import './usefiltro.css'
const useFiltro = () => {
    const [categoria, setCategoria] = useState('')
   const resultado = useStaticQuery(graphql`
   query {
    allStrapiCategorias {
      
        nodes{
          nombre
          id
        }
      }
    
    }
   `)

   const categorias = resultado.allStrapiCategorias.nodes

    const FiltroUI = () => (
        <form>
            <select
                onChange={e => setCategoria(e.target.value)}
                value={categoria}
            >
                {categorias.map(opcion => (
                    <option key={opcion.id} value={opcion.nombre}>{opcion.nombre}</option>
                ))}
            </select>
            
           
        </form>
    )
    return {
        categoria,
        FiltroUI
    }
} 

export default useFiltro
