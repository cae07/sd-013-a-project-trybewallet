import React from 'react';
import ExpensesForm from '../components/ExpensesForm';
import Header from '../components/Header';

class Wallet extends React.Component {
  render() {
    // console.log(results);
    return (
      <div>
        <Header />
        <ExpensesForm />
      </div>
    );
  }
}

export default Wallet;
