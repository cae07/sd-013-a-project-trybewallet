import React, { Component } from 'react';
import PropTypes from 'prop-types';

const numbers = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
  ten: 10,
  eleven: 11,
};

class ExpensesDataTable extends Component {
  render() {
    const { expenses } = this.props;
    const { one, two, three, four, five, six, seven, eight, nine, ten, eleven } = numbers;
    return (
      <tbody>
        {expenses.map((expense) => (
          <tr key={ Number(expense.id) }>
            <td key={ Number(expense.id + one) }>{expense.description}</td>
            <td key={ Number(expense.id + two) }>{expense.tag}</td>
            <td key={ Number(expense.id + three) }>{expense.method}</td>
            <td key={ Number(expense.id + four) }>{expense.value}</td>
            <td key={ Number(expense.id + five) }>
              {/** Dólar comercial */}
              {expense.exchangeRates[expense.currency].name}
            </td>
            <td key={ Number(expense.id + six) }>
              {Number(expense.exchangeRates[expense.currency].ask).toFixed(2)}
              {/** Cotação vigente */}
            </td>
            <td key={ Number(expense.id + seven) }>
              {Number(expense.value
               * expense.exchangeRates[expense.currency].ask).toFixed(2)}
            </td>
            <td key={ Number(expense.id + eight) }>
              Real
            </td>
            <td key={ Number(expense.id + nine) }>
              <button key={ Number(expense.id + ten) } type="button">Editar</button>
              <button key={ Number(expense.id + eleven) } type="button">Excluir</button>
            </td>
          </tr>
        ))}
      </tbody>
    );
  }
}

ExpensesDataTable.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default ExpensesDataTable;
