// React
import React, { Component } from 'react';

// Children
import ExpensesTableHead from './ExpensesTableHead';
import ExpensesTableBody from './ExpensesTableBody';

class ExpensesTable extends Component {
  render() {
    return (
      <table>
        <ExpensesTableHead />
        <ExpensesTableBody />
      </table>
    );
  }
}

export default ExpensesTable;
