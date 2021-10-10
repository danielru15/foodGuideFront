import { graphql } from 'gatsby'
import React from 'react'
import Layout from '../loyaut/Layout'
import './restaurantepreview.css'
import ReactStars from "react-rating-stars-component";

export const query = graphql`
query($id:String!) {
    allStrapiRestaurantes (filter:{id: {eq: $id}} ) {
        nodes {
            nombre
            calificacion
            descripcion
            precio
            sedeVisitada
            categorias {
              nombre
            }
            ubicaciones {
              nombre
            }
            imagen {
             name   
             url
            }
          }
    }
  }
`
const RestaurantePreview = ({data:{allStrapiRestaurantes: {nodes}}}) => {
    
    const {nombre, calificacion, descripcion , precio,
          imagen,sedeVisitada  } = nodes[0]
         
          const formatodivisa = new Intl.NumberFormat('es-CO',{
            style:'currency',
            currency:'COP',
            minimumFractionDigits: 0
        })
    return (
            <Layout>
            <div className="titulo">
                <h1>{nombre}</h1>
            </div>
            <div className="slider">
                {imagen.map(image => (
                    <img src={image.url} alt={image.name} />
                ))}
            
            </div>
            
           <div className="contenedor">
            <div className="Info">
                <h2>-Sede visitada</h2>
                <p>{sedeVisitada}</p>
            </div>
            <div className="Info">
                <h2>-Precio</h2>
                <p> El precio promedio del restaurante por plato es de: <strong>{formatodivisa.format(precio)} COP </strong> </p>
            </div>
            <div className="Info">
                <h2>-Calificacion</h2>
                <ReactStars
                count={5}
                value={calificacion}
                size={30}
                edit={false}
                activeColor="#ffd700"
                isHalf={true}
                />
            </div>
           </div>
           <div className="Informacion">
               <p>{descripcion}</p>
           </div>
          
       </Layout>
    )
}

export default RestaurantePreview
