import React from 'react';
import LoginForm from '../components/forms/LoginForm';
import { withAuth } from '../providers/AuthProvider';

const Login = ({auth}) => {

  const signIn = (loginData) => {
    auth.signIn(loginData)
  }

  return (
    <div className="form">
        <LoginForm onSubmit={signIn}/>
    </div> 
  )
}

export default withAuth(Login);