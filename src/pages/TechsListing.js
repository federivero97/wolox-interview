import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTechs } from '../actions';
import TechsList from '../components/TechsList';

const TechsListing = () => {

  const techs = useSelector(state => state.techs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTechs());
  }, [dispatch]);

  return (
    
    <div className='techs-listing' id='techs-listing'>
      <TechsList techs={techs}/>
    </div>
  );
};

export default TechsListing; 