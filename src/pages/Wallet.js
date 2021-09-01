// React
import React from 'react';

// Children
import WalletHeader from '../components/WalletHeader';
import ExpenseForm from '../components/ExpenseForm';

class Wallet extends React.Component {
  render() {
    return (
      <div className="Wallet">
        <WalletHeader />
        <ExpenseForm />
      </div>
    );
  }
}

export default Wallet;
