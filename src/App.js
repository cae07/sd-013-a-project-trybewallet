import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { Login, Wallet } from './pages';

import 'bootstrap/dist/css/bootstrap.min.css';
// import './ReactToastify.css';

function App() {
  const notify = () => toast('Wow so easy!');

  return (
    <div className="App">

      <Switch>
        <Route exact path="/" component={ Login } />

        <Route path="/carteira" component={ Wallet } />

      </Switch>
      <div>
        <button type="button" onClick={ notify }>Notify!</button>
        <ToastContainer />
      </div>
    </div>
  );
}

export default App;
