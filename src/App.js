import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Switch>
        <Route exact path="/" component={ Login } />
        <Route path="/carteira" component={ Wallet } />
      </Switch>
  )
}

export default App;
