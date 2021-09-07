import React from 'react';
import { Header, WalletForm, TableWallet } from '../components';

class Wallet extends React.Component {
  render() {
    return (
      <>
        <Header />
        <WalletForm />
        <TableWallet />
      </>
    );
  }
}

export default Wallet;
