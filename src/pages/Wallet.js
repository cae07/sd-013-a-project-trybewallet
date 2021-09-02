import React from 'react';
import { Header, Table } from '../components';
import FormWallet from '../components/wallet';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <FormWallet />
        <Table />
      </div>
    );
  }
}

export default Wallet;
