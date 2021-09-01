import React from 'react';
import { Route } from 'react-router-dom';
import Login from './pages/Login';
import Wallet from './pages/Wallet';

function App() {
  return (
    <div>
      Hello, TrybeWallet!
      {/* <Switch> */}
      <Route path="/carteira">
        <Wallet />
      </Route>
      <Route exact path="/" component={ Login } />
      {/* </Switch> */}
    </div>
  );
}

export default App;
