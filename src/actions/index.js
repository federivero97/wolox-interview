import { techData } from '../store/data';
//import axios from 'axios';

export const fetchTechs = () => {
  return {
    type: 'FETCH_TECHS',
    techs: techData
  }
} 

/*
export const fetchTechs = () => dispatch => {
  axios.get('http://private-anon-1a8e767dad-woloxfrontendinverview.apiary-proxy.com/techs')
    .then(res => {
      const techs = res.data;
      dispatch({
        type: 'FETCH_TECHS',
        techs
      });
    })
}*/