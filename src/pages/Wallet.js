import React from 'react';
import { WalletHeader, WalletAddForm, ExpensesTable } from '../components';
import './Wallet.css';

class Wallet extends React.Component {
  render() {
    return (
      <>
        <WalletHeader />
        <WalletAddForm />
        <ExpensesTable />
      </>
    );
  }
}

export default Wallet;
