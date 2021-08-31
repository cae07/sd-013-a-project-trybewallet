import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Wallet from './pages/Wallet';

function App() {
  return (
    <div>
      <Switch>
        <Route exact to="/" component={ Login } />
        <Route to="/carteira" component={ Wallet } />
      </Switch>
    </div>);
}

export default App;
