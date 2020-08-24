import React from 'react';
import LoginForm from '../components/forms/LoginForm';
import { withAuth } from '../providers/AuthProvider';
import { Redirect } from 'react-router-dom';
import ApiErrors from '../components/forms/ApiErrors';

const Login = ({auth}) => {

  const [submited, setSubmited] = React.useState(false);
  const [errors, setErrors] = React.useState();

  const signIn = (loginData) => {
    auth.signIn(loginData)
    .then(() => setSubmited(true))
    .catch(errors => setErrors(errors));
  };

  return (
    <div className="form">
        {errors ? <ApiErrors errors={errors}/> : <LoginForm onSubmit={signIn}/>}
        {submited ? (<Redirect to={{pathname: '/techs-listing'}} />) : null } 
    </div> 
  );
};

export default withAuth(Login);