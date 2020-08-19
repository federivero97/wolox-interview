import React from 'react';
import TechCard from '../components/TechCard';


const TechsList = ({techs}) => {
    
    return (
        <div className="techs-list">  
            {techs.map(tech => <TechCard tech={tech} key={tech.tech}/>)}
        </div>
    );
};

export default TechsList;