import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class WalletExpenses extends React.Component {
  getAsk(expense) {
    const { ask } = expense.exchangeRates[expense.currency];
    return parseFloat(ask).toFixed(2);
  }

  getCurrencyName(expense) {
    const { name } = expense.exchangeRates[expense.currency];
    const splited = name.split('/');
    return splited[0];
  }

  getConvertedValue(expense) {
    const { ask } = expense.exchangeRates[expense.currency];
    return parseFloat(expense.value * ask).toFixed(2);
  }

  render() {
    const { expenses } = this.props;
    console.log(expenses);
    return (
      <table>
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
        { expenses.map((expense) => (
          <tr key={ expense.id }>
            <td>{ expense.description }</td>
            <td>{ expense.tag }</td>
            <td>{ expense.method }</td>
            <td>{ expense.value }</td>
            <td>{ this.getAsk(expense) }</td>
            <td>Real</td>
            <td>{ this.getConvertedValue(expense) }</td>
            <td>{ this.getCurrencyName(expense) }</td>
          </tr>
        ))}
      </table>
    );
  }
}

WalletExpenses.propTypes = {
  expenses: PropTypes.shape().isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(WalletExpenses);
