import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Expenses from '../components/Expenses';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Expenses />
        <Link to="/">Home</Link>
      </div>
    );
  }
}

export default Wallet;
