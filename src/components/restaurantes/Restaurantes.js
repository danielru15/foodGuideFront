import React, { useEffect, useState } from 'react'
import useRestaurantes from '../../hooks/useRestaurantes'
import './restaurantes.css'
import useFiltro from '../../hooks/useFiltro'
import RestaurantCard from './RestaurantCard'
import NotFound from '../nofound/NotFound'

const Restaurantes = () => {
    const resultado = useRestaurantes()
    const [restaurante] = useState(resultado)
    const [filtradas, setfiltradas] = useState([])
    const [isFiltradas , setIsfiltradas] = useState(true)
   const { categoria,  FiltroUI  } = useFiltro()
   

   useEffect(() => {
       if(categoria) {
           const filtro = restaurante.filter( restaurante => restaurante.categorias[0].nombre === categoria ||  restaurante.categorias[1].nombre === categoria)
           setfiltradas(filtro)
           setIsfiltradas(filtro.length !== 0)
            
       }else {
           setfiltradas(restaurante)
       }
   }, [categoria , restaurante])
   
    return (
        <>
        <div className="filtro">
            {FiltroUI()}
        </div>
       
        <div className="restaurante-contenedor">
       
            {
            isFiltradas ? filtradas.map(restaurant => (
                    <RestaurantCard
                        key={restaurant.id}
                        calificacion={restaurant.calificacion}
                        imagen={restaurant.imagen[0].url}
                        seo={restaurant.imagen[0].nombre}
                        categoria={restaurant.categorias[0].nombre}
                        nombre={restaurant.nombre}
                        ubicaciones={restaurant.ubicaciones}
                    />
            ))
            : <>
                <NotFound/>
            </>
            } 
            
        </div>   
        </> 
    )
}

export default Restaurantes
