import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Wallet from './pages/Wallet';
import Login from './pages/Login';

function App() {
  return (
    <Switch>
      <Route exact to="/" component={ Login } />
      <Route exact to="/carteira" component={ Wallet } />
    </Switch>
  );
}

export default App;
