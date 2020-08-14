import React from 'react';
import LoginForm from '../components/forms/LoginForm';
import { Redirect } from 'react-router-dom';
import ApiErrors from '../components/forms/ApiErrors';
import { withAuth } from '../providers/AuthProvider';

class Login extends React.Component {

  constructor() {
    super();
    this.state = {
      shouldRedirect: false,
      errors: []
    }
  }

  signIn = (loginData) => {
    this.props.auth.signIn(loginData)
      .then(_ => this.setState({shouldRedirect: true}))
      .catch(errors => this.setState({errors}))
  }

  render() {
    const { errors, shouldRedirect } = this.state;

    if (shouldRedirect) {
      return <Redirect to={{pathname: '/'}} />
    }

    return (
      <div className="form">
          <h1 className="page-title">Login</h1>
          {/* <!-- <div className="alert alert-success">
            Some message
          </div> --> */}
          <LoginForm onSubmit={this.signIn} />
          <ApiErrors errors={errors}/>
      </div> 
    )
  }
}

export default withAuth(Login);