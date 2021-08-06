import React from 'react'
import './header.css'
import { Link } from 'gatsby'
const Navegacion = () => {
    return (
        <nav>
            <Link to="/" activeClassName="red">Restaurantes</Link>
            
        </nav>
    )
}

export default Navegacion
