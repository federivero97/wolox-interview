import React from 'react';
import { Switch, Route } from "react-router-dom";

import Login from './pages/Login';
import Landing from './pages/Landing';
import TechListing from './pages/TechListing';

const Routes = () => {
  return (
    <div className="container">
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/tech-listing">
          <TechListing />
        </Route>
      </Switch>
    </div>
  )
}

export default Routes; 