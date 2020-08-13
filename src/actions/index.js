import axios from 'axios';

export const fetchTechs = () => dispatch => {
  axios.get('api/techs')
    .then(res => {
      const techs = res.data;
      techs.sort((a, b) => a.tech.localeCompare(b.tech));
      dispatch({
        type: 'FETCH_TECHS',
        techs
      });
    })
}