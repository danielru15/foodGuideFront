import React from 'react'
import './notfound.css'
import RestaurantCard from '../restaurantes/RestaurantCard'
const NotFound = ({categoria}) => {
    return (
        <>
            <h2 className="notfound">
                <img src="https://res.cloudinary.com/danielru997/image/upload/v1633761431/happyfoodie_copia_cpry5f.png" alt="logo" />
            NO se encontraron resultados para {categoria} prueba con otra categoria.
            </h2>
        </>
    )
}

export default NotFound
