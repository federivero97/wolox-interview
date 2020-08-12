import React from 'react';

/* eslint-disable jsx-a11y/anchor-is-valid*/ 
// eslint-disable-next-line 

 const Header = () => {

    return (
        <div id="navigation-bar">
            <nav>
                <ul>
                    <img src={process.env.PUBLIC_URL + '/assets/Images/logo_full_color.svg'} alt="Wolox Logo"/> 
                    <li>Inicio</li>
                    <li>Tecnologias</li>
                    <li>Beneficios</li>
                    <li>Requerimientos</li>
                    <li>Login</li>
                </ul>
            </nav>
            
        </div>

    )
 }

 export default Header;