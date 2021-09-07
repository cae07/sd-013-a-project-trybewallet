import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class ExpenseTable extends React.Component {
  montaTabela() {
    const { expenses } = this.props;
    console.log(expenses);
    return expenses.map((expense, index) => (
      <tr key={ index }>
        <td>{expense.description}</td>
        <td>{expense.tag}</td>
        <td>{expense.method}</td>
        <td>{expense.value}</td>
        <td>{expense.exchangeRates[expense.currency].name.split('/')[0]}</td>
        <td>{parseFloat(expense.exchangeRates[expense.currency].ask).toFixed(2)}</td>
        <td>
          {(expense.value * expense.exchangeRates[expense.currency].ask).toFixed(2)}
        </td>
        <td>Real</td>
        <td>T1</td>
      </tr>
    ));
  }

  render() {
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
        {this.montaTabela()}
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

ExpenseTable.propTypes = {
  expenses: PropTypes.arrayOf(Object).isRequired,
};

export default connect(mapStateToProps, null)(ExpenseTable);
