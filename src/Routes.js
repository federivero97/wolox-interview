import React from 'react';
import { Switch, Route } from "react-router-dom";

import Login from './pages/Login';
import Landing from './pages/Landing';
import TechListing from './pages/TechListing';
import AuthRoute from './components/auth/AuthRoute';
import GuestRoute from './components/auth/GuestRoute';

const Routes = () => {
  return (
    <div className="container">
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <GuestRoute path="/login">
          <Login />
        </GuestRoute>
        <AuthRoute path="/tech-listing">
          <TechListing/>
        </AuthRoute>
      </Switch>
    </div>
  )
}

export default Routes; 