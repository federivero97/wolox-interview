import React from 'react';
import TechCard from '../components/TechCard';
import { JackInTheBox } from "react-awesome-reveal";

const TechsList = ({techs}) => {
    
    return (
        <div className="techs-list">  
            {techs.map(tech => <JackInTheBox triggerOnce><TechCard tech={tech} key={tech.id}/></JackInTheBox>)}
        </div>
    );
};

export default TechsList;