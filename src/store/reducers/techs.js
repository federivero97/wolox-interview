const techs = (state = [], action) => {

  if (action.type === 'FETCH_TECHS') {
    return action.techs;
  } else {
    return state;
  }
};

  export default techs; 