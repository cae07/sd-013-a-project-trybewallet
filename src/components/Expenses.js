import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Expenses extends React.Component {
  render() {
    const { expenses } = this.props;

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

        {expenses.map((expense) => {
          const currencyExpense = expense.currency;
          const exchangeRatesObj = expense.exchangeRates[currencyExpense];
          const valueNumber = expense.value;
          const correncyName = exchangeRatesObj.name.split('/')[0];
          const exchangeUsed = Number(exchangeRatesObj.ask).toFixed(2);
          const convertedValue = (valueNumber * exchangeRatesObj.ask).toFixed(2);

          return (
            <tr key={ expense.id }>
              <td>{ expense.description }</td>
              <td>{ expense.tag }</td>
              <td>{ expense.method }</td>
              <td>{ valueNumber }</td>
              <td>{ correncyName }</td>
              <td>{ exchangeUsed }</td>
              <td>{ convertedValue }</td>
              <td>Real</td>
              <td>
                <button type="button">Edit</button>
                <button type="button">Excluir</button>
              </td>

            </tr>
          );
        })}
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

Expenses.propTypes = ({
  expenses: PropTypes.arrayOf().isRequired,
});

export default connect(mapStateToProps)(Expenses);
