import React from 'react'
import useInicio from '../../hooks/useInicio'
import './hero.css'
const Hero = () => {
const inicio = useInicio()
const {texto ,imagen} = inicio[0]

    return (
        <div className="hero">
            <h1>{texto}</h1>
            <img src={imagen} alt="aa" />    
        </div>
        
    )
}

export default Hero
