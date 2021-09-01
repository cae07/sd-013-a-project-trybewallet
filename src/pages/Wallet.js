import React from 'react';
import Header from '../components/Header';
import ExpensesForm from '../components/ExpensesForm';

class Wallet extends React.Component {
  render() {
    return (
      <main>
        <Header />
        <ExpensesForm />
      </main>
    );
  }
}

export default Wallet;
