import React from 'react';
import PropTypes from 'prop-types';
import htmlID from './util/util';

const COLUMNS_NAME = ['Descrição', 'Tag', 'Método de pagamento', 'Valor', 'Moeda',
  'Câmbio utilizado', 'Valor Convertido', 'Moeda de conversão', 'Editar/Excluir'];
class ExpensesTable extends React.Component {
  constructor(props) {
    super(props);
    this.generateColumns = this.generateColumns.bind(this);
    this.generateRows = this.generateRows.bind(this);
  }

  generateColumns(columns) {
    return (
      <tr>
        {columns.map((column) => <th key={ `column+${htmlID()}` }>{column}</th>)}
      </tr>);
  }

  generateRows(expenses) {
    return (
      expenses.map((expense) => {
        const { value, description, currency, method, tag, exchangeRates } = expense;
        const { ask, code, name } = exchangeRates[currency];
        const currencyNames = name.split('/');
        const expenseRow = (
          <tr>
            <td key={ htmlID({ name: description }) }>{ description }</td>
            <td key={ htmlID({ name: tag }) }>{ tag }</td>
            <td key={ htmlID({ name: method }) }>{ method }</td>
            <td key={ htmlID({ name: value }) }>{ `${code} ${value}` }</td>
            <td key={ htmlID({ name: currencyNames[0] }) }>{ currencyNames[0] }</td>
            <td key={ htmlID({ name: ask }) }>{ `R$ ${ask}` }</td>
            <td key={ htmlID({ name: ask + value }) }>{ ask * value }</td>
            <td key={ htmlID({ name: currencyNames[1] }) }>{ currencyNames[1] }</td>
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
        { this.generateColumns(COLUMNS_NAME) }
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
