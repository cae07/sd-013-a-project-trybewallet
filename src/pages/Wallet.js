import React from 'react';
import FormWallet from './FormWallet';
import Header from './Header';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <FormWallet />
      </div>
    );
  }
}

export default Wallet;
