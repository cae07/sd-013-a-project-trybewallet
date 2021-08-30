import React from 'react';
import { Switch, Route } from 'react-router';
import Login from './pages/Login';
import Wallet from './pages/Wallet';

function App() {
  return (
    <Switch>
      <Route path="/Wallet" component={ Wallet } />
      <Route exact path="/" component={ Login } />
      <Route path="*" render={ <div>Not Found</div> } />
    </Switch>
  );
}

export default App;
