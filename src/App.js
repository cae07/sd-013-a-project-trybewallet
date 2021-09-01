import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Wallet from './pages/Wallet';
import './App.css';

class App extends Component {
  constructor() {
    super();    
    
    this.state = {form: 'login'};   
    
    // I like using objects to toggle values. We could just use true/false and just set to !self value as well. 
    this.toggle = {
      login: 'Cadastro',
      register: 'login'
    };
  }
  
  onSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route path="/carteira" component={ Wallet } />
      </Switch>
    );
  }
}

export default App;

// codigo inteiro do projeto baseado nos estudos da aluna Aline Eiko Hoshino e do Pedro Delicoli
