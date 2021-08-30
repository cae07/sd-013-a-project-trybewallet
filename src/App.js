// React
import React from 'react';
import { Route } from 'react-router-dom';

// Páginas
import { Login, Wallet } from './pages';

function App() {
  return (
    <div>
      { /* Página de Login */ }
      <Route exact path="/" component={ Login } />

      { /* Página do Wallet */ }
      <Route exact path="/carteira" component={ Wallet } />
    </div>
  );
}

export default App;
