import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Login, Wallet } from './pages';

import '../node_modules/react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">

      <Switch>
        <Route exact path="/" component={ Login } />

        <Route path="/carteira" component={ Wallet } />

      </Switch>

    </div>
  );
}

export default App;
