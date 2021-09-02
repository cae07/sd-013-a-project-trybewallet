import React from 'react';
import { Header } from '../components';
import Table from '../components/Table';
import FormWallet from '../components/FormWallet';

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
