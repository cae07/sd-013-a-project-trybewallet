import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import htmlID from './util/util';

const COLUMNS_NAME = ['Descrição', 'Tag', 'Método de pagamento', 'Valor', 'Moeda',
  'Câmbio utilizado', 'Valor convertido', 'Moeda de conversão', 'Editar/Excluir'];
class ExpensesTable extends React.Component {
  constructor(props) {
    super(props);
    this.generateColumns = this.generateColumns.bind(this);
    this.generateRows = this.generateRows.bind(this);
  }

  generateColumns(columns) {
    return (
      <tr>
        {columns.map((column) => (
          <th name={ column } key={ htmlID({ name: column }) }>{column}</th>
        ))}
      </tr>);
  }

  // { `${code} ${value}` }
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
            <td key={ htmlID({ name: 'button' }) }>button</td>
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

ExpensesTable.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default connect(mapStateToProps, null)(ExpensesTable);
