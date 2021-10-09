import React from 'react'
import { Link } from 'gatsby'
import urlSlug from 'url-slug'
import './restaurantes.css'
import ReactStars from "react-rating-stars-component";


const RestaurantCard = ({imagen,seo,nombre,calificacion,ubicaciones}) => {
    return (
        <>
        <Link to={urlSlug(nombre)}  className="restaurante" >
        <div className="imagen" >
                    <img src={imagen} alt={seo} />
                </div>
                <div className="informacion">
                    <h2>{nombre}</h2>
                <ReactStars
                    count={5}
                    value={calificacion}
                    size={15}
                    edit={false}
                    activeColor="#ffd700"
                    isHalf={true}
                />
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
