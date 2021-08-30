import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';

function App() {
  return (
    <Switch>
      <Route exactpath="/" component={ Login } />
    </Switch>
  );
}

export default App;
