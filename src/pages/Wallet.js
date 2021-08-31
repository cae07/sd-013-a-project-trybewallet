import React from 'react';
import './Wallet.css';
import WalletHeader from '../components/WalletHeader';
import WalletForm from '../components/WalletForm';

class Wallet extends React.Component {
  render() {
    return (
      <>
        <WalletHeader />
        <WalletForm />
      </>
    );
  }
}

export default Wallet;
