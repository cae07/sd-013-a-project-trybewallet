import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Reset } from 'styled-reset';
import { Login, Wallet } from './pages';
import './App.css';

const theme = {
  color: {
    background: '#ffff',
  },
};

function App() {
  return (
    <ThemeProvider theme={ theme }>
      <Reset />
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/carteira" component={ Wallet } />
      </Switch>
    </ThemeProvider>
  );
}

export default App;
