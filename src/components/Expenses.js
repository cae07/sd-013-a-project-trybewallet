import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteExpense } from '../actions';

class Expenses extends React.Component {
  buttonDelete(id) {
    const { deleteExpenseButton, expenses } = this.props;

    const filteredExpenses = expenses.filter((expense) => expense.id !== id);

    deleteExpenseButton(filteredExpenses);
  }

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
                <button type="button" data-testid="edit-btn">Edit</button>
                <button
                  type="button"
                  data-testid="delete-btn"
                  onClick={ () => this.buttonDelete(expense.id) }
                >
                  Excluir
                </button>
              </td>

            </tr>
          );
        })}
      </table>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  deleteExpenseButton: (expenses) => dispatch(deleteExpense(expenses)),
});

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

Expenses.propTypes = ({
  expenses: PropTypes.arrayOf().isRequired,
  deleteExpenseButton: PropTypes.func.isRequired,
});

export default connect(mapStateToProps, mapDispatchToProps)(Expenses);
