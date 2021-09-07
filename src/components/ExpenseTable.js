import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';

class ExpenseTable extends React.Component {
  tableHeader() {
    return (
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
    );
  }

  render() {
    const { mapStateExpense } = this.props;
    return (
      <div>
        {this.tableHeader()}
        {mapStateExpense.map((expense) => (
          <tr key={ Math.random() }>
            <td>{ expense.description }</td>
            <td>{ expense.tag }</td>
            <td>{ expense.method }</td>
            <td>{ expense.value }</td>
            <td>{ expense.exchangeRates[expense.currency].name }</td>
            <td>
              { parseFloat(expense.exchangeRates[expense.currency].ask).toFixed(2) }
            </td>
            <td>
              { (parseFloat(expense.value)
                * parseFloat(expense.exchangeRates[expense.currency].ask)).toFixed(2) }
            </td>
            <td>Real</td>
          </tr>
        ))}
      </div>
    );
  }
}

ExpenseTable.propTypes = {
  mapStateExpense: propTypes.arrayOf(propTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
  mapStateExpense: state.wallet.expenses,
});

export default connect(mapStateToProps)(ExpenseTable);
