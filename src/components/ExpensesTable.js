// React
import React, { Component } from 'react';

// PropTypes
import PropTypes from 'prop-types';

// Redux
import { connect } from 'react-redux';
import { deleteExpense } from '../actions';

class ExpensesTable extends Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
  }

  deleteExpense(id) {
    const { props: { deleteExpenseDispatcher } } = this;
    deleteExpenseDispatcher(id);
  }

  renderHead() {
    return (
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
    );
  }

  render() {
    return (
      <table>
        { this.renderHead() }
        <tbody>
          {expenses.map(({
            id, description, tag, method, value, exchangeRates, currency,
          }) => (
            <tr key={ id }>
              <td>{description}</td>
              <td>{tag}</td>
              <td>{method}</td>
              <td>{value}</td>
              <td>{exchangeRates[currency].name.split('/')[0]}</td>
              <td>
                {`${parseFloat(exchangeRates[currency].ask).toFixed(2)}`}
              </td>
              <td>
                {`${(exchangeRates[currency].ask * value).toFixed(2)}`}
              </td>
              <td>Real</td>
              <td>
                <button
                  onClick={ () => this.deleteExpense(id) }
                  data-testid="delete-btn"
                  type="button"
                >
                  Apagar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

ExpensesTable.propTypes = {
  expenses: PropTypes.array,
}.isRequired;

const mapStateToProps = (store) => ({
  expenses: store.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  deleteExpenseDispatcher: (payload) => dispatch(deleteExpense(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesTable);
