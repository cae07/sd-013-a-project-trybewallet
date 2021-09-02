import React from 'react';

import { Header, WalletForm, WalletTable } from '../components';

class Wallet extends React.Component {
  render() {
    return (
      <>
        <Header />
        <WalletForm />
        <WalletTable />
      </>
    );
  }
}

export default Wallet;
