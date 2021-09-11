import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Wallet from './pages/Wallet';

export default class App extends Component {
  render() {
    return (
      <section className="main-content">
        <Switch>
          {/* Req 1 */}
          <Route exact path="/" component={ Login } />
          <Route exact path="/" component={ Wallet } />
        </Switch>
      </section>
    );
  }
}
