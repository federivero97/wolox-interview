import React from 'react';
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import { Link } from "react-scroll";

const Header = ({location, token, logout}) => {

  const loginButton = () => { 
    return (
      <a className="nav-item" href='/login'><button className='login-button'> Login </button></a>
    )
  }

  const logoutButton = () => { 
    return (
      <button className="login-button" onClick={logout}> Logout </button>
    )
  }

  return (
    <div className="container">

        <nav className='navbar'>
          <a className="nav-item" href='/'>
              <img className="nav-logo" src={process.env.PUBLIC_URL + '/assets/Images/logo_full_color.svg'} alt="wolox-logo"/>
          </a>

            {location.pathname==='/' ? 
              <div className='nav-list-item'>
                <Link className="nav-item" activeClass="active" to="welcome" spy={true} smooth={true} offset={-70} duration= {500}>Inicio</Link>
                <Link className="nav-item" activeClass="active" to="techs" spy={true} smooth={true} offset={-70} duration= {500}>Tecnologias</Link>
                <Link className="nav-item" activeClass="active" to="benefits" spy={true} smooth={true} offset={-70} duration= {500}>Beneficios</Link>
                <Link className="nav-item" activeClass="active" to="requirements" spy={true} smooth={true} offset={-70} duration= {500}>Requerimientos</Link>
              </div>
            : null
            }
            {token ? logoutButton() : loginButton()}
        </nav>

    </div>
  );
}

const mapStateToProps = ({auth: {token}}, props) => {
  return {
    token,
    location: props.location
  }
}

export default withRouter(connect(mapStateToProps)(Header));