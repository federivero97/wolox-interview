import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTechs } from '../actions';

import TechCard from '../components/TechCard'

const TechsListing = () => {

  const techs = useSelector(state => state.techs);
  const dispatch = useDispatch();

  const [filterTech, setFilterTech] = React.useState("");
  const [techsFiltered, setTechsFiltered] = React.useState([]);
  const [typeTech, setTypeTech] = React.useState("");
  const [sortTech, setSortTech] = React.useState("");

  const handleFilterChange = event => {
    setFilterTech(event.target.value);
  };

  const handleTypeChange = event => {
    setTypeTech(event.target.value);
  };

  const handleSortChange = event => {
    setSortTech(event.target.value);
    techs.reverse();
  };

  useEffect(() => {
    dispatch(fetchTechs());
  }, [dispatch]);

  useEffect(() => {
    const results = techs.filter(tech =>
      tech.type.includes(typeTech) &&
      tech.tech.toLowerCase().includes(filterTech.toLowerCase())
    );
    setTechsFiltered(results);
  }, [typeTech, filterTech, sortTech, techs]);

  const renderTechs = (techs) =>
    techs.map(tech => 
      <TechCard tech={tech} key={tech.tech}/>
    );

  return (
    <div className='techs-listing'>
      <div className="techs-filters">
        <input className="filter filter-input"
          type="text"
          placeholder="Search"
          value={filterTech}
          onChange={handleFilterChange}
        />

        <select className="filter filter-type" defaultValue={''}
            onChange={handleTypeChange}>
          <option value=""> Todas </option>
          <option value="Back-End"> Back-End </option>
          <option value="Front-End"> Front-End </option>
          <option value="Mobile"> Mobile </option>
        </select>
        
        <select className="filter filter-sort" defaultValue={'Ascendente'}
            onChange={handleSortChange}>
          <option value="Ascendente"> Ascendente </option>
          <option value="Descendente"> Descendente</option>
        </select>
      </div>

      <div className="techs-list">  
        { renderTechs(techsFiltered) }
      </div>

      <div className="techs-footer">
        <p> {techsFiltered.length} / {techs.length}  <b>Tecnologías encontradas</b> </p>
      </div>
    </div>
  )
}

export default TechsListing; 