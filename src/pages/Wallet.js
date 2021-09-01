// React
import React from 'react';

// Children
import WalletHeader from '../components/WalletHeader';
import ExpenseForm from '../components/ExpenseForm';
import ExpensesTable from '../components/ExpensesTable';

class Wallet extends React.Component {
  render() {
    return (
      <div className="Wallet">
        <WalletHeader />
        <ExpenseForm />
        <ExpensesTable />
      </div>
    );
  }
}

export default Wallet;
