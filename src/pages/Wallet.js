import React from 'react';
import FormAddExpenditure from '../components/FormAddExpenditure';
import Header from '../components/Header';
import TableExpenses from '../components/TableExpenses';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <FormAddExpenditure />
        <TableExpenses />
      </div>
    );
  }
}

export default Wallet;
