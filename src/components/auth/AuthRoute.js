import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from '../../providers/AuthProvider';
import { connect } from 'react-redux';

const AuthRoute = ({token, children, ...rest}) => {
  const authService = useAuth();
  const onlyChild = React.Children.only(children);
  return (
    <Route {...rest} render={(props) => token||authService.isAuthenticated() ?
      React.cloneElement(onlyChild, {...rest, ...props}) : 
      <Redirect to={{pathname: '/login'}} />  
    }/>
  )
}

const mapStateToProps = ({auth: {token}}) => {
  return {
    token
  }
}

export default connect(mapStateToProps)(AuthRoute); 