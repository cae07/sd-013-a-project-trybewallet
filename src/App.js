import React from 'react';
import { Route } from 'react-router-dom';
import Login from './pages/Login';
import Wallet from './pages/Wallet';

function App() {
  return (
    <div>
      <Route exact path="/" component={ Login } />
      <Route exat path="/Wallet" component={ Wallet } />
    </div>
  );
}

export default App;
