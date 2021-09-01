import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import './login.css';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
    </Switch>
  );
}

export default App;
