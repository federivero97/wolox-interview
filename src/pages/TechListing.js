import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTechs } from '../actions';

const TechListing = () => {

  const dispatch = useDispatch();
  const techs = useSelector(state => state.techs);

  useEffect(() => {
    dispatch(fetchTechs());
  });

  const renderTechs = (techs) => 
    techs.map(tech => 
      <div key={tech.tech} className="col-md-3">
        {tech.tech}
      </div>
    );

  return (
    <div className="tech-list">  
      <h1 className="page-title">Techs listing</h1>
      <div className="row">
        { renderTechs(techs) }
      </div>
    </div>
  )
}

export default TechListing; 