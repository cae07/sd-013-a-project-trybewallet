import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Wallet from './pages/Wallet';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route path="Wallet" component={ Wallet } />
      </Switch>
    </Router>);
}

export default App;
