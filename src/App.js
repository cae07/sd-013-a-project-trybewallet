import React from 'react';
import { Route, Switch } from 'react-router';
import { Login } from './pages';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
    </Switch>
  );
}

export default App;
