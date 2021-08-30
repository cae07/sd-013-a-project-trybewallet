import React from 'react';

// Importa o Route e o Switch para configurar as rotas
import { Route, Switch } from 'react-router-dom';

// Importa as pages para serem usadas, estrutuando suas rotas pelo Route
import Login from './pages/Login';
import Wallet from './pages/Wallet';

function App() {
  return (
    <Switch>
      <Route path="/carteira" component={ Wallet } />
      <Route exact path="/" component={ Login } />
    </Switch>
  );
}

export default App;
