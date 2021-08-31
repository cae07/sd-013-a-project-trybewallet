import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { Login, Wallet } from './pages';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">

      <Switch>
        <Route exact path="/" component={ Login } />

        <Route path="/carteira" component={ Wallet } />

      </Switch>
      <ToastContainer />

    </div>
  );
}

export default App;
