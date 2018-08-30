import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import NotMatch from '@/pages/404';
import Home from '@/pages/Home';
import Prefs from '@/pages/Prefs';
import Finish from '@/pages/Finish';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/:id" component={Home} />
          <Route exact path="/prefs/:id" component={Prefs} />
          <Route exact path="/result/:id" component={Finish} />
          <Route component={NotMatch} />
        </Switch>
      </Router>
    );
  }
}

export default App;
