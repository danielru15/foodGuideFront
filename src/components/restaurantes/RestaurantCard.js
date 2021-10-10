import React from 'react'
import { Link } from 'gatsby'
import urlSlug from 'url-slug'
import './restaurantes.css'
import ReactStars from "react-rating-stars-component";


const RestaurantCard = ({key,imagen,seo,nombre,calificacion,categoria}) => {
    return (
        <>
        <Link to={urlSlug(nombre)}  className="restaurante" key={key}>
        <div className="imagen">
                    <img src={imagen} alt={seo} />
                </div>
                <div className="informacion">
                    <h2>{nombre}</h2>
                <ReactStars
                    count={5}
                    value={calificacion}
                    size={18}
                    edit={false}
                    activeColor="#ffd700"
                    isHalf={true}
                />
                    <p>{categoria}</p>
                </div>
        </Link>
                
        </>
    )
}

export default RestaurantCard
