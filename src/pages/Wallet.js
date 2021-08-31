import React from 'react';
import './Wallet.css';
import WalletHeader from '../components/WalletHeader';

class Wallet extends React.Component {
  render() {
    return (
      <>
        <h1>Carteira</h1>
        <WalletHeader />
      </>
    );
  }
}

export default Wallet;
