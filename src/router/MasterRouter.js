// [1.1] - Começamos importanto os modulos e componentes.
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from '../pages/Login';
// 3.1.1 importar Wallet
import Wallet from '../pages/Wallet';

// [1.2] - Agora só montar o Router.
class MasterRouter extends React.Component {
  render() {
    return (
      <Switch>
        {/* 3.1.2 agora é só colocar o path */}
        <Route path="/carteira" component={ Wallet } />
        <Route path="/" component={ Login } />
      </Switch>
    );
  }
}
export default MasterRouter;
