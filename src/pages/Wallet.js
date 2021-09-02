import React from 'react';
import Header from '../components/Header';
import PaymentsTable from '../components/PaymentsTable';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    tthis.state = {
      editing: false,
    };
  }

  render() {
    const { editing } = this.state;

    return (
      <div>
        <Header />
        (
        {editing ? <AddPayment /> : <EditPayment />}
        )
        <PaymentsTable />
      </div>
    );
  }
}

export default Wallet;
