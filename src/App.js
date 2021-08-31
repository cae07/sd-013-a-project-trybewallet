import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';

class App extends Component {
  render() {
    return (
      <div className="App">
        Hello, TrybeWallet!
        <Switch>
          <Route path="/" component={ Login } />
        </Switch>

      </div>
    );
  }
}

export default App;
