import React from 'react';
import LoginForm from '../components/forms/LoginForm';
import { Redirect } from 'react-router-dom';
import ApiErrors from '../components/forms/ApiErrors';
import { withAuth } from '../providers/AuthProvider';

const Login = ({auth}) => {

  const [submited, setSubmited] = React.useState(false);
  const [errors, setErrors] = React.useState([]);

  const signIn = (loginData) => {
    auth.signIn(loginData)
      .then(_ => setSubmited(true))
      .catch(errors => setErrors({errors}))
  }

  return (
    <div className="form">
        <LoginForm onSubmit={signIn} />
        <ApiErrors errors={errors}/>
        {submited ? (<Redirect to={{pathname: '/techs-listing'}} />) : null } 
    </div> 
  )
}

export default withAuth(Login);