import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Login from './pages/Login';
import Wallet from './pages/Wallet';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={ () => <Login /> } />
        <Route path="/carteira" render={ () => <Wallet /> } />
      </Switch>
    </Router>
  );
}

export default App;
