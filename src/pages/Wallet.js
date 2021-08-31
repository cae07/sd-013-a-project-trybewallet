import React from 'react';
import Form from '../components/Form/Form';
import Header from '../components/HeaderWallet';

class Wallet extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Form />
      </>
    );
  }
}

export default Wallet;
