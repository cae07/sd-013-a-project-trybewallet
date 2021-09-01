import React from 'react';
import { Route } from 'react-router-dom';
// import Login from './pages/Login';
import Wallet from './pages/Wallet';
import Login from './pages/Login';

function App() {
  return (
    <div>
      <Route exact path="/" component={ Login } />
      <Route path="/carteira" component={ Wallet } />
    </div>
  );
}

export default App;
