// 9.1.1 imports
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// 9.1.1 criar o component
class ExpensesTable extends React.Component {
  // 9.1.2 criar a tabela em forma de função para facilitar a logica.
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
    // 9.1.4 trazer as informações do reducer
    const { stateWalletExpenses } = this.props;
    return (
      // 9.1.5 criar a logica da table
      <tbody className="header-table">
        {this.tableHeader()}
        {stateWalletExpenses.map((expense) => (
          <tr key={ Math.random() }>
            <td>{ expense.description }</td>
            <td>{ expense.tag }</td>
            <td>{ expense.method }</td>
            <td>{ expense.value }</td>
            <td>
              {expense.exchangeRates[expense.currency]
                .name}
            </td>
            <td>
              { parseFloat(expense.exchangeRates[expense.currency].ask).toFixed(2) }
            </td>
            <td>
              { (parseFloat(expense.value)
                * parseFloat(expense.exchangeRates[expense.currency].ask)).toFixed(2) }
            </td>
            <td>Real</td>
            <td>
              <button type="button">
                <i />
              </button>
              <button
                type="button"
                data-testid="delete-btn"
              >
                <i id={ expense.id } />
              </button>
            </td>
          </tr>))}
      </tbody>
    );
  }
}

ExpensesTable.propTypes = {
  stateWalletExpenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};
// 9.1.3 fazer a conecção com o reducer
const mapStateToProps = (state) => ({
  stateWalletExpenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(ExpensesTable);
