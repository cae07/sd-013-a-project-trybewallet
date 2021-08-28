import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Wallet from './pages/Wallet';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/wallet" component={ Wallet } />
          <Route path="/" component={ Login } />
        </Switch>
      </BrowserRouter>
    </div>);
}

export default App;
