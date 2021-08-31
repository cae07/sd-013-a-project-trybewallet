import React from 'react';
import Header from '../components/Header';
import Form from '../components/Form';
import './Wallet.css';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Form />
      </div>);
  }
}

export default Wallet;
