import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteExpense as deleteExpenseAction } from '../actions';

class ExpenseTable extends Component {
  constructor() {
    super();
    this.handleDelBtn = this.handleDelBtn.bind(this);
  }

  handleDelBtn({ target }) {
    const { deleteExpense } = this.props;
    const idToRemove = Number(
      target.parentElement.parentElement.getAttribute('data-key'),
    );
    deleteExpense({ idToRemove });
  }

  render() {
    const { expenses } = this.props;
    return (
      <table>
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
          { expenses.map((expense) => (
            <tr data-key={ expense.id } key={ expense.id }>
              <td>{ expense.description }</td>
              <td>{ expense.tag }</td>
              <td>{ expense.method }</td>
              <td>{ Number(expense.value) }</td>
              <td>{ expense.exchangeRates[expense.currency].name.split('/')[0] }</td>
              <td>{ Number(expense.exchangeRates[expense.currency].ask).toFixed(2) }</td>
              <td>
                { (Number(expense.exchangeRates[expense.currency].ask)
              * Number(expense.value)).toFixed(2) }
              </td>
              <td>Real</td>
              <td>
                <button
                  type="button"
                  onClick={ this.handleDelBtn }
                  data-testid="delete-btn"
                >
                  Deletar
                </button>

              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

ExpenseTable.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.any).isRequired,
  deleteExpense: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  deleteExpense: (payload) => dispatch(deleteExpenseAction(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseTable);
