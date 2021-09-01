import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Reset } from 'styled-reset';
import { Login, Wallet } from './pages';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route exact path="/carteira" component={ Wallet } />
    </Switch>

  );
}

export default App;
