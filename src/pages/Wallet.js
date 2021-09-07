import React from 'react';
import NewExpense from '../components/NewExpense';
import WalletHeader from '../components/WalletHeader';
import '../styles/wallet.css';

class Wallet extends React.Component {
  render() {
    return (
      <>
        <WalletHeader />
        <NewExpense />
      </>
    );
  }
}

export default Wallet;
