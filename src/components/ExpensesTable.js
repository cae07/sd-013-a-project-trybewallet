import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class ExpensesTable extends React.Component {
  getCurrencyRate({ exchangeRates, currency }) {
    return Math.round(exchangeRates[currency].ask * 100) / 100;
  }

  convertCurrency({ value, exchangeRates, currency }) {
    const rate = exchangeRates[currency].ask;
    return Math.round((value * rate) * 100) / 100;
  }

  render() {
    const { expenses } = this.props;
    return (
      <table>
        <tbody>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
          {expenses.map((expense) => (
            <tr key={ expense.id }>
              <td>{expense.description}</td>
              <td>{expense.tag}</td>
              <td>{expense.method}</td>
              <td>{expense.value}</td>
              <td>{expense.exchangeRates[expense.currency].name.split('/', 1)[0]}</td>
              <td>{this.getCurrencyRate(expense)}</td>
              <td>{this.convertCurrency(expense)}</td>
              <td>Real</td>
              <td><button type="button">Excluir</button></td>
            </tr>))}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = ({ wallet }) => ({
  expenses: wallet.expenses,
});

ExpensesTable.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps)(ExpensesTable);
