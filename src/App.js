import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/" component={ Login } />
        </Switch>
      </div>
    );
  }
}

export default App;
