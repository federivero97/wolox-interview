import React from 'react';

const Landing = () => {

  return (
    <div id='landing' className='landing'>


      <div id='welcome' className='landing-welcome'>
        <div className='welcome-text'>
          <p>Bienvenido a tu <b>Entrevista Técnica</b> en <span className='green-text'> Wolox </span></p>
        </div>
        <div className='welcome-img'>
          <img src={process.env.PUBLIC_URL + '/assets/Img Hero/Ic_ilustra_Hero.png'} alt="Welcome img"/>
        </div>
      </div>
      
      <div id='techs' className='landing-techs'>
        <div className='techs-text'>
          <p> Estamos buscando para incorporar gente increible para estas tecnologicas: </p>
        </div>
        <div className='techs-img'>
          <img src={process.env.PUBLIC_URL + '/assets/Images/Ic_Tecnologys.svg'} alt="Techs img"/>
        </div>
      </div>

      <div id='social' className='landing-social'>
        <div className='social-img'>
          <div>
            <span className='green-text'>350 + </span>
            <span className='blue-text'>Woloxers</span>
          </div>
          <div className='twitter-acount'>
            <img className='twitter-logo' src={process.env.PUBLIC_URL + '/assets/Images/Ic_Twitter.png'} alt="Twitter img"/>
            <span> @Wolox </span>
          </div>
          <a target='_blank' rel="noopener noreferrer" href='https://twitter.com/Wolox'>
            <button> Siguenos </button>
          </a>
        </div>
        <div className='social-text'>
          <span>Trabajamos para </span>
          <span className='blue-text'> convertir </span>
          <span className='green-text'> ideas </span>
          <span> en productos.</span>
        </div>
      </div>

      <div id='benefits' className='landing-benefits'>
        <div className='benefits-title'>
          <p> Entre los beneficios que ofrecemos se encuentran ;) </p>
        </div>
        <div className='benefits-list'>

          <div className='benefits-item'>
           <img className='benefits-img' src={process.env.PUBLIC_URL + '/assets/Images/Ic_Hour.svg'} alt="Hour img"/>
           <p className='benefits-detail'> Flexibilidad Horaria </p>
          </div>

          <div className='benefits-item'>
           <img className='benefits-img' src={process.env.PUBLIC_URL + '/assets/Images/Ic_HomeOffice.svg'} alt="HomeOffice img"/>
           <p className='benefits-detail'>Home Office </p>
          </div>

          <div className='benefits-item'>
           <img className='benefits-img' src={process.env.PUBLIC_URL + '/assets/Images/Ic_Workshops.svg'} alt="Workshops img"/>
           <p className='benefits-detail'> Capacitaciones y Workshops </p>
          </div>

          <div className='benefits-item'>
           <img className='benefits-img' src={process.env.PUBLIC_URL + '/assets/Images/Ic_DrinkSnacks.svg'} alt="DrinkSnacks img"/>
           <p className='benefits-detail'> Snacks, frutas y bebidas gratis </p>
          </div>

          <div className='benefits-item'>
           <img className='benefits-img' src={process.env.PUBLIC_URL + '/assets/Images/Ic_laptop.svg'} alt="Laptop img"/>
           <p className='benefits-detail'>Semana Remota</p>
          </div>

          <div className='benefits-item'>
           <img className='benefits-img' src={process.env.PUBLIC_URL + '/assets/Images/Ic_brain.svg'} alt="Brain img"/>
           <p className='benefits-detail'> Trabajar en ultimas tecnologias </p>
          </div>
        </div>
      </div>

      <hr/>

      <div id='requirements' className='landing-requirements'>
        <div>
            Requerimietos
        </div>
        <div className='requirements-list'>
          <ul>
            <li className='first-item'>
              <p>Estudiantes avanzados o recibidos de carreras del rubro informático, sistemas o electrónicos</p> 
            </li>
            <li className='second-item'>
               <p>Inglés intermedio/avanzado</p> 
            </li>
            <li className='third-item'>
              <p>Conocimientos en metodologías ágiles (deseable)</p> 
            </li>
          </ul>
        </div>
      </div>


      <div id='footer' className='landing-footer'>
        <div>
          <h3>Gracias por <span className='blue-text'>completar el ejercicio</span></h3>
          <h2>Te invitamos a ver más informacion</h2>
          <a target='_blank' rel="noopener noreferrer" href='https://www.wolox.com.ar/'>
                  <button> Conocer más </button>
          </a>
        </div>
        <img className='footer-img' src={process.env.PUBLIC_URL + '/assets/Images/Ic_Wolox_Footer.svg'} alt="Wolox Footer"/>
      </div>
    </div>   

  )
}

export default Landing;