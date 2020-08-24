import axios from 'axios';

export const extractApiErrors = (resError) => {
  let errors = [{title: 'Error!', detail: 'Ooops! Algo salio mal.'}];

  if (resError && resError.data && resError.data.errors) {
    errors = resError.data.errors;
  }

  return errors;
};

export const fetchTechs = () => dispatch => {
  axios.get('/api/techs')
    .then(res => {
      const techs = res.data;
      techs.sort((a, b) => a.tech.localeCompare(b.tech));
      techs.forEach((tech, i) => {
        tech.id = i + 1;
      });
      dispatch({
        type: 'FETCH_TECHS',
        techs
      });
    })
    .catch(error => Promise.reject(extractApiErrors(error.response || {})));
};

export const loginUser = async (loginData) => {
  try {
    const res = await axios
      .post('/api/login', loginData);
    return res.data;
  }
  catch (error) {
    return await Promise.reject(extractApiErrors(error.response || {}));
  }
};

export const userAuthenticated = (token) => {
  return {
    type: 'USER_AUTHENTICATED',
    token: token || ''
  };
};