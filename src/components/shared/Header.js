import React from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

const Header = ({username, isAuth, logout}) => {

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
                    { isAuth &&
                        <>
                            <li>   
                                <Link to="/techs-listing"> Techs Listing </Link>
                            </li>
                            <li className="nav-item">
                                <p onClick={logout} >
                                    Logout
                                </p>
                            </li>
                        </>
                    }
                    { !isAuth &&
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

 const mapStateToProps = ({auth: {username, isAuth}}) => {
    return {
      username,
      isAuth
    }
  }
  
  export default connect(mapStateToProps)(Header); 