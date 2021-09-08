import React from 'react';
import { Switch, Route } from 'react-router';
import Login from './pages/Login';
import Wallet from './pages/Wallet';

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/carteira" component={ Wallet } />
        <Route path="/" component={ Login } />
      </Switch>
    );
  }
}

export default App;
