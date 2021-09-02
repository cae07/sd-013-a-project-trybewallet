import React from 'react';
import Header from '../components/Header';
import AddPayment from '../components/AddPayment';
import PaymenTable from '../components/PaymenTable';

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
        <PaymenTable />
      </>
    );
  }
}

export default Wallet;
