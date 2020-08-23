import React, { useEffect, lazy, Suspense} from 'react';
const TechCardsList = lazy(() => import('./TechCardsList'));

const TechsList = ({techs}) => {

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
        setTechsFiltered(null);
        const results = techs.filter(tech =>
            tech.type.includes(typeTech) &&
            tech.tech.toLowerCase().includes(filterTech.toLowerCase())
        );
        setTechsFiltered(results);
    }, [typeTech, filterTech, sortTech, techs]);
    
    return (
    
        <div className='techs-list' id='techs-list'>
          <div className="techs-filters" id='techs-filters'>
            <input className="filter filter-input" data-testid="filter-input"
              type="text"
              placeholder="Buscar"
              value={filterTech}
              onChange={handleFilterChange}
            />
    
            <select className="filter filter-type" data-testid="filter-type" defaultValue={''}
                onChange={handleTypeChange}>
              <option value=""> Todas </option>
              <option value="Back-End"> Back-End </option>
              <option value="Front-End"> Front-End </option>
              <option value="Mobile"> Mobile </option>
            </select>
            
            <select className="filter filter-sort" data-testid="filter-sort" defaultValue={'Ascendente'}
                onChange={handleSortChange}>
              <option value="Ascendente"> Ascendente </option>
              <option value="Descendente"> Descendente</option>
            </select>
          </div>
    
          <Suspense fallback={<div>Cargando...</div>}>
            <TechCardsList id='techs-list' techs={techsFiltered}/>
          </Suspense>
    
          <div className="techs-footer">
            <p> {techsFiltered.length} / {techs.length}  <b>Tecnologías encontradas</b> </p>
          </div>
        </div>
    );


};

export default TechsList;