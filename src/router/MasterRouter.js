// 1.1 - Começamos importanto os modulos e componentes.
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from '../pages/Login';

// 1.2 - Agora só montar o Router.
class MasterRouter extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/" component={ Login } />
      </Switch>
    );
  }
}
export default MasterRouter;
