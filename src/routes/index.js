import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../containers/Home';
import Prefs from '../containers/Survey/Prefs';
import Survey from '../containers/Survey/Survey';
import Finish from '../containers/Survey/Finish';
import NoMatch from '../containers/NoMatch';

class Router extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/prefs/:catid" component={Prefs} />
        <Route exact path="/:catid" component={Survey} />
        <Route exact path="/result/:catid" component={Finish} />
        <Route component={NoMatch} />
      </Switch>
    );
  }
}

export default Router;
