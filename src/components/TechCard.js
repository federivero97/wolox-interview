import React from 'react';

const TechCard = ({tech}) => {

    return (
    <div className="tech-card">


            <h2 className="card-title">{tech.tech}</h2>
            <img className="card-img" src={tech.logo} alt={tech.tech} />
            
            <div className="card-info"> 
                <span className="card-text">  Autor: </span> 
                <span className="card-detail"> {tech.author}</span>
            </div>
            <div className="card-info"> 
                <span className="card-text">  Año: </span> 
                <span className="card-detail"> {tech.year}</span>
            </div>
            <div className="card-info"> 
                <span className="card-text">  Licencia: </span> 
                <span className="card-detail"> {tech.license}</span>
            </div>
            <div className="card-info"> 
                <span className="card-text">  Lenguaje: </span> 
                <span className="card-detail"> {tech.language}</span>
            </div>
            <div className="card-info"> 
                <span className="card-text">  Tipo: </span> 
                <span className="card-detail"> {tech.type}</span>
            </div>
    </div>
    )
}
  
export default TechCard;
