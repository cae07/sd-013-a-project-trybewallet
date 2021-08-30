import React from 'react';
import { WalletHeader, WalletAddForm } from '../components';
import './Wallet.css';

class Wallet extends React.Component {
  render() {
    return (
      <>
        <WalletHeader />
        <WalletAddForm />
      </>
    );
  }
}

export default Wallet;
