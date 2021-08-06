import React from 'react'
import './notfound.css'
import RestaurantCard from '../restaurantes/RestaurantCard'
const NotFound = () => {
    return (
        <>
            <h2 className="notfound">
            NO se encontraron resultados para o los filtros seleccionados, prueba con u otros filtros.
            </h2>
        </>
    )
}

export default NotFound
