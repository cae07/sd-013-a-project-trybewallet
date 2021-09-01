import React from 'react';
import { Header } from '../components';
import FormWallet from '../components/wallet';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <FormWallet />
      </div>
    );
  }
}

export default Wallet;
