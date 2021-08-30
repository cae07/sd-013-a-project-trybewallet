import React from 'react';
import Header from '../components/Header';
import WalletForm from '../components/walletForm';

class Wallet extends React.Component {
  render() {
    return (
      <>
        <Header />
        <WalletForm />
      </>
    );
  }
}

export default Wallet;
