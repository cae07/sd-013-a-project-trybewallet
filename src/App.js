import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Wallet from './pages/Wallet';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/carteira" component={ Wallet } />
      </Switch>
    </Router>);
}

export default App;
