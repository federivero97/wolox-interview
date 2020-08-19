import React, { useEffect, lazy, Suspense} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTechs } from '../actions';

const TechList = lazy(() => import('../components/TechList'));

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
    setTechsFiltered(null);
    const results = techs.filter(tech =>
      tech.type.includes(typeTech) &&
      tech.tech.toLowerCase().includes(filterTech.toLowerCase())
    );
    setTechsFiltered(results);
  }, [typeTech, filterTech, sortTech, techs]);

  return (
    
    <div className='techs-listing'>
      <div className="techs-filters">
        <input className="filter filter-input"
          type="text"
          placeholder="Buscar"
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

      <Suspense fallback={<div>Loading...</div>}>
        <TechList techs={techsFiltered}/>
      </Suspense>

      <div className="techs-footer">
        <p> {techsFiltered.length} / {techs.length}  <b>Tecnologías encontradas</b> </p>
      </div>
    </div>
  );
};

export default TechsListing; 