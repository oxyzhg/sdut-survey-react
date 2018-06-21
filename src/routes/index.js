import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../containers/Survey/Home';
import Survey from '../containers/Survey/Survey';
import Finish from '../containers/Survey/Finish';
// import Survey from "../components/Survey/Survey";

class Router extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/survey" component={Survey} />
        <Route exact path="/result" component={Finish} />
      </Switch>
    );
  }
}

export default Router;
