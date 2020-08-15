import React from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

const Header = ({token, logout}) => {

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
                    { token &&
                        <>
                            <li>   
                                <Link to="/tech-listing"> Techs Listing </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/" onClick={logout} >
                                    Logout
                                </Link>
                            </li>
                        </>
                    }
                    { !token &&
                        <>
                            <li>   
                                <Link to="/login"> Login </Link>
                            </li>
                        </>
                    }
                </ul>
            </nav>
            
        </div>

    )
 }

 const mapStateToProps = ({auth: {token}}) => {
    return {
      token
    }
  }
  
  export default connect(mapStateToProps)(Header); 