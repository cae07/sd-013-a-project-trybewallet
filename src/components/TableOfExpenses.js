import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './TableOfExpense.css';

class TableOfExpenses extends React.Component {
  Tabela() {
    return (
      <tr className="table-header">
        <th className="table-component">Descrição</th>
        <th className="table-component">Tag</th>
        <th className="table-component">Método de pagamento</th>
        <th className="table-component">Valor</th>
        <th className="table-component">Moeda</th>
        <th className="table-component">Câmbio utilizado</th>
        <th className="table-component">Valor convertido</th>
        <th className="table-component">Moeda de conversão</th>
        <th className="table-component">Editar/Excluir</th>
      </tr>
    );
  }

  render() {
    const { stateWalletExpenses } = this.props;
    return (
      <div>
        {this.Tabela()}
        {stateWalletExpenses.map((expense) => (
          <tr key={ expense.id }>
            <td>{ expense.description }</td>
            <td>{ expense.tag }</td>
            <td>{ expense.method }</td>
            <td>{ expense.value }</td>
            <td>
              {expense.exchangeRates[expense.currency.name]}
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
      </div>
    );
  }
}

TableOfExpenses.propTypes = {
  stateWalletExpenses: PropTypes.arrayOf(PropTypes.object),
}.isRequired;

const mapStateToProps = (state) => ({
  stateWalletExpenses: state.wallet.expenses,
});

export default connect(mapStateToProps, null)(TableOfExpenses);
