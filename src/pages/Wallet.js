import React from 'react';
import Header from '../components/Header';
import FormWallet from '../components/FormWallet';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <p>TrybeWallet</p>
        <Header />
        <FormWallet />
      </div>
    );
  }
}

export default Wallet;
