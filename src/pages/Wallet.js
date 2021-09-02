import React from 'react';
import AddExpense from '../components/AddExpense';
import Header from '../components/Header';

class Wallet extends React.Component {
  render() {
    return (
      <section>
        <Header />
        <AddExpense />
      </section>
    );
  }
}

export default Wallet;
