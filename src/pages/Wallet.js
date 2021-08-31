import React from 'react';
import ExpenditureForm from '../components/ExpenditureForm';
import Header from '../components/Header';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <section>
          <Header />
        </section>
        TrybeWallet
        <section>
          <ExpenditureForm />
        </section>
      </div>);
  }
}

export default Wallet;
