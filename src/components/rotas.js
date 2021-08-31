import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import Login from '../pages/Login';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ Login } />
      </Switch>
    );
  }
}

export default Routes;
