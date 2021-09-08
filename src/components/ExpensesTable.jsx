import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import htmlID from './util/util';
import { deleteExpenseAction } from '../actions/index';

const COLUMNS_NAME = ['Descrição', 'Tag', 'Método de pagamento', 'Valor', 'Moeda',
  'Câmbio utilizado', 'Valor convertido', 'Moeda de conversão', 'Editar/Excluir'];
class ExpensesTable extends React.Component {
  constructor(props) {
    super(props);
    this.generateColumns = this.generateColumns.bind(this);
    this.generateRows = this.generateRows.bind(this);
    this.deleteExpense = this.deleteExpense.bind(this);
  }

  deleteExpense(e) {
    e.preventDefault();
    const id = Number(e.target.value);
    const { expenses, removeExpenseByID } = this.props;
    const deleteExpense = expenses.filter((expense) => expense.id !== id);
    removeExpenseByID({ expenses: deleteExpense, expenseDeletedID: id });
  }

  generateColumns(columns) {
    return (
      <tr>
        {columns.map((column) => (
          <th name={ column } key={ htmlID({ name: column }) }>{column}</th>
        ))}
      </tr>);
  }

  generateRows(expenses) {
    return (
      expenses.map((expense) => {
        const { id, value, description, currency, method, tag, exchangeRates } = expense;
        const { ask, name } = exchangeRates[currency];
        const currencyNames = name.split('/');
        const expenseRow = (
          <tr key={ htmlID({ name: id }) }>
            <td key={ htmlID({ name: description }) }>{ description }</td>
            <td key={ htmlID({ name: tag }) }>{ tag }</td>
            <td key={ htmlID({ name: method }) }>{ method }</td>
            <td key={ htmlID({ name: value }) }>{ value }</td>
            <td key={ htmlID({ name: currencyNames[0] }) }>{ currencyNames[0] }</td>
            <td key={ htmlID({ name: ask }) }>{ Number(ask).toFixed(2) }</td>
            <td key={ htmlID({ name: ask + value }) }>{ ask * value }</td>
            <td key={ htmlID({ name: 'Real' }) }>Real</td>
            <td key={ htmlID({ name: 'button' }) }>
              <button
                onClick={ this.deleteExpense }
                type="button"
                data-testid="delete-btn"
                value={ id }
              >
                🗙
              </button>
            </td>
          </tr>
        );
        return expenseRow;
      })

    );
  }

  render() {
    const { expenses } = this.props;
    return (
      <table>
        <thead>{ this.generateColumns(COLUMNS_NAME) }</thead>
        { this.generateRows(expenses) }
      </table>
    );
  }
}

const mapStateToProps = ({ wallet: { expenses } }) => ({
  expenses,
});

const mapDispatchToProps = (dispatch) => ({
  removeExpenseByID: (payload) => dispatch(deleteExpenseAction(payload)),
});

ExpensesTable.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  removeExpenseByID: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesTable);
