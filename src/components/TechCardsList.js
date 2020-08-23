import React from 'react';
import TechCard from './TechCard';

const TechCardsList = ({techs}) => {
    
    return (
        <div className="tech-cards-list" data-testid="tech-cards-list">  
            {techs.map(tech => <TechCard tech={tech} key={tech.id}/>)}
        </div>
    );
};

export default TechCardsList;