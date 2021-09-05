import React from 'react';
// [5.2.1] import header
import HeaderMail from '../components/HeaderMail';
// [5.2.1] - importar expessesforms
import ExpensesForm from '../components/ExpensesForms';
// 9.2.1 import
import ExpensesTable from '../components/ExpensesTable';

class Wallet extends React.Component {
  render() {
    // [5.2.2] {X} chamar o HeaderMail
    // 9.2.2 {X}chamar o ExpensesTable
    return (
      <>
        <HeaderMail>TrybeWallet</HeaderMail>
        <ExpensesForm />
        <ExpensesTable />
      </>
    );
  }
}

export default Wallet;
