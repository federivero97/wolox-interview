import React from 'react';
import { Switch, Route } from "react-router-dom";

import Login from './pages/Login';
import Landing from './pages/Landing';
import TechsListing from './pages/TechsListing';
import AuthRoute from './components/auth/AuthRoute';
import GuestRoute from './components/auth/GuestRoute';

const Routes = () => {
  return (
    <div className="container">
      <Switch>
        <GuestRoute exact path="/login">
          <Login />
        </GuestRoute>
        <AuthRoute exact path="/techs-listing">
          <TechsListing/>
        </AuthRoute>
        <Route path="/">
          <Landing />
        </Route>
      </Switch>
    </div>
  );
};

export default Routes; 