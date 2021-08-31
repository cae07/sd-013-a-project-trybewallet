import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './pages/Login';
import Wallet from './pages/Wallet';

function App() {
  return (
    <Router>
      <Route exact path="/" component={ Login } />
      <Route exact path="sla" component={ Wallet } />
    </Router>
  );
}

export default App;
