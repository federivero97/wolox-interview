import React from 'react';

const TechCard = ({tech}) => {

    return (
    <div className="card tech-card">
        <div className="card-body">
            <img 
            className="card-img" 
            src={tech.logo}
            alt={tech.tech} />
            <h5 className="card-title">{tech.tech}</h5>
            <p className="card-text">{tech.author} @{tech.year}</p>
            <p className="card-text">{tech.license}</p>
            <p className="card-text">{tech.language}</p>
            <p className="card-text">{tech.type}</p>
        </div>
    </div>
    )
}
  
export default TechCard;
