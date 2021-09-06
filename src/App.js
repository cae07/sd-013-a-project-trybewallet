import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Wallet from './pages/Wallet';
import './App.css';

function App() {
  return (
    <div>
      {' '}
      Hello, TrybeWallet!
      <Switch>
        <Route exact path="/carteira" component={ Wallet } />
        <Route path="/" component={ Login } />
      </Switch>
    </div>
  );
}

export default App;
