import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { delExpenses } from '../actions';

function TableWallet({ expenses, deleteExpense }) {
  return (
    <table className="pure-table pure-table-horizontal" width="100%">
      <thead>
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
      </thead>
      <tbody>
        {expenses.map((item) => (
          <tr id={ item.id } key={ item.id }>
            <td>{item.description}</td>
            <td>{item.tag}</td>
            <td>{item.method}</td>
            <td>{item.value}</td>
            <td>{item.exchangeRates[item.currency].name.split('/')[0]}</td>
            <td>{(item.exchangeRates[item.currency].ask * 1).toFixed(2)}</td>
            <td>
              {(item.exchangeRates[item.currency].ask * item.value).toFixed(2)}
            </td>
            <td>Real</td>
            <td>
              <button type="button">Editar</button>
              <button
                data-testid="delete-btn"
                id={ item.id }
                type="button"
                onClick={ (event) => deleteExpense(Number(event.target.id)) }
              >
                Excluir

              </button>
            </td>

          </tr>
        ))}

      </tbody>
    </table>

  );
}

TableWallet.propTypes = {
  expenses: PropTypes.arrayOf(),
  deleteExpense: PropTypes.func.isRequired,
};

TableWallet.defaultProps = {
  expenses: [{}],
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});
const mapDispatchToProps = (dispatch) => ({
  deleteExpense: (payload) => dispatch(delExpenses(payload)),
});
export default connect(mapStateToProps, mapDispatchToProps)(TableWallet);
