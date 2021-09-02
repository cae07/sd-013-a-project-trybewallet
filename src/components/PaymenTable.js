import React, { Component } from 'react';
import tableHeaders from './helpers/tableHeaders';
import TableBody from './TableBody';

class ExpensesTable extends Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            {tableHeaders.map((head) => <th key={ head }>{head}</th>)}
          </tr>
        </thead>
        <tbody>
          <TableBody />
        </tbody>
      </table>
    );
  }
}

export default ExpensesTable;
