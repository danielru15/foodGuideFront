import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'gatsby'
import Header from '../header/Header'

import './layaout.css'


const Layout = ({children}) => {
    return (
        <>
        <Helmet>
            <title>Foodguide</title>
            <link rel="shortcut icon" href="https://sevilla.abc.es/gurme/wp-content/uploads/sites/24/2012/01/comida-rapida-casera.jpg" type="image/x-icon" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,700;1,400&display=swap" rel="stylesheet"/>
            
        </Helmet>
        <Header/>
        {children}
        <footer className="footer">
  	 <div className="container">
  	 	<div className="row">
  	 		<div className="footer-col">
  	 			<h4>company</h4>
  	 			<ul>
  	 				<li><Link to="/blog">blog</Link></li>
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>Contactanos</h4>
  	 			<ul>
					   <li>
					   	<a href='mailto:esqui9710@gmail.com'>Correo: esqui9710@gmail.com</a>
					   </li>
				   </ul>
  	 		</div>
  	 		
  	 		<div className="footer-col">
  	 			<h4>Siguenos</h4>
  	 			<div className="social-links">
				   <ul>
					   <li>
						   instagram
					   </li>
				   </ul>
  	 			</div>
  	 		</div>
  	 	</div>
  	 </div>
  </footer>
        
        </>
    )
}

export default Layout
