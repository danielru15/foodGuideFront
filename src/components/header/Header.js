import React from 'react'
import { Link } from 'gatsby'
import './header.css'

const Header = () => {
    return (
        <header>
            <Link to="/">
                <h1>Happyfoodie.co</h1>
            </Link>
        </header>
    )
}

export default Header
