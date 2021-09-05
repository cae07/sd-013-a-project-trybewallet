import React from 'react';
// 5.2.1 import header
import HeaderMail from '../components/HeaderMail';
// 5.2.1 - importar expessesforms
import ExpensesForm from '../components/ExpensesForms';

class Wallet extends React.Component {
  render() {
    // 5.2.2 {X} chamar o HeaderMail
    return (
      <>
        <HeaderMail>TrybeWallet</HeaderMail>
        <ExpensesForm />
      </>
    );
  }
}

export default Wallet;
