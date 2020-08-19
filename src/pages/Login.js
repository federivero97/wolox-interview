import React from 'react';
import LoginForm from '../components/forms/LoginForm';
import { withAuth } from '../providers/AuthProvider';
import { Redirect } from 'react-router-dom';

const Login = ({auth}) => {

  const [submited, setSubmited] = React.useState(false);

  const signIn = (loginData) => {
    auth.signIn(loginData)
    .then(() => setSubmited(true));
  };

  return (
    <div className="form">
        <LoginForm onSubmit={signIn}/>
        {submited ? (<Redirect to={{pathname: '/techs-listing'}} />) : null } 
    </div> 
  );
};

export default withAuth(Login);