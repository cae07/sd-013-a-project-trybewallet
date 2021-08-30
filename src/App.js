import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Wallet from './pages/Wallet';

function App() {
  return (
    <Switch>
      <Route path="/wallet">
        <Wallet />
      </Route>
      <Route exact path="/">
        <Login />
      </Route>
    </Switch>
  );
}

export default App;
