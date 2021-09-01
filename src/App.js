import React from 'react';
import { Route } from 'react-router-dom';
import Login from './pages/Login';

function App() {
  return (
    <main>
      <Route path="/" component={ Login } />
    </main>
  );
}

export default App;
