import React from 'react';
import { Link } from "react-router-dom";

 const Header = () => {

    return (
        <div id="navigation-bar">
            <nav>
                <ul>
                    <Link to="/">
                        <img src={process.env.PUBLIC_URL + '/assets/Images/logo_full_color.svg'} alt="Wolox Logo"/>
                        <li>Inicio</li>
                    </Link>
                    <li>Tecnologias</li>
                    <li>Beneficios</li>
                    <li>Requerimientos</li>
                    <li>   
                        <Link to="/login">Login</Link>
                    </li>
                </ul>
            </nav>
            
        </div>

    )
 }

 export default Header;