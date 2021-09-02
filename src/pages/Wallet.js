import React from 'react';
import Header from '../components/Header';
import AddPayment from '../components/AddPayment';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <>
        <Header />
        <AddPayment />
      </>
    );
  }
}

export default Wallet;
