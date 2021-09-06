import React from 'react';
import Header from '../components/Header';
import FormsWallet from '../components/FormsWallet';

class Wallet extends React.Component {
  render() {
    return (
      <>
        <Header />
        <FormsWallet />
      </>
    );
  }
}

export default Wallet;
