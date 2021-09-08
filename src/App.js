import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Wallet from './pages/Wallet';
import './App.css';

function App() {
  return (
    <Switch>
      <Route
        path="/carteira"
        render={ () => (
          <Wallet />
        ) }
      />
      <Route
        exact
        path="/"
        render={ () => (
          <Login />
        ) }
      />
    </Switch>
  );
}

export default App;
