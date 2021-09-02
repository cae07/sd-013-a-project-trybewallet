import React, { Component } from 'react';
import PropTypes from 'prop-types';
import tableHeaders from './helpers/tableHeaders';
import TableBody from './TableBody';

class ExpensesTable extends Component {
  render() {
    const { handleEdition } = this.props;
    return (
      <table>
        <thead>
          <tr>
            {tableHeaders.map((title) => <th key={ title }>{title}</th>)}
          </tr>
        </thead>
        <tbody>
          <TableBody handleEdition={ handleEdition } />
        </tbody>
      </table>
    );
  }
}

ExpensesTable.propTypes = {
  handleEdition: PropTypes.func,
}.isRequired;

export default ExpensesTable;
