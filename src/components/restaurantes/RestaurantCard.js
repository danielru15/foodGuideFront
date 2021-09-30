import React from 'react'
import { Link } from 'gatsby'
import urlSlug from 'url-slug'
import './restaurantes.css'


const RestaurantCard = ({imagen,seo,nombre,categoria,ubicaciones}) => {
    return (
        <>
        <Link to={urlSlug(nombre)}  className="restaurante">
        <div className="imagen">
                    <img src={imagen} alt={seo} />
                </div>
                <div className="informacion">
                    <h2>{nombre}</h2>
                    <p>Categoria: {categoria}</p>
                    <div className="flex">Ubicaciones: {ubicaciones.map(restaurante=> (
                            <p> -{restaurante.nombre}</p>
                        ))}
                    </div>
                </div>
        </Link>
                
        </>
    )
}

export default RestaurantCard
