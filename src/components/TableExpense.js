import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteExpense } from '../actions';

class TableExpense extends React.Component {
  constructor(props) {
    super(props);
    this.subtitle = this.subtitle.bind(this);
    this.listExpenses = this.listExpenses.bind(this);
    this.clickDeleteExpense = this.clickDeleteExpense.bind(this);
    this.filterExpenseId = this.filterExpenseId.bind(this);
    // this.clickEditExpense = this.clickEditExpense.bind(this);
  }

  subtitle() {
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

  filterExpenseId(id) {
    const { expenses } = this.props;
    return expenses.id === id;
  }

  clickDeleteExpense(id, convertValue) {
    const { dispatchDeleteExpense } = this.props;
    dispatchDeleteExpense(id, convertValue);
  }

  listExpenses() {
    const { expenses } = this.props;
    return (
      expenses.map(({ exchangeRates, currency, value, id, description, tag, method }) => {
        const exchange = exchangeRates[currency];
        const nameExchange = exchange.name.split('/')[0];
        const askExchange = Number(exchange.ask).toFixed(2);
        const convertValue = (value * exchange.ask).toFixed(2);
        return (
          <tr key={ id }>
            <td>{ description }</td>
            <td>{ tag }</td>
            <td>{ method }</td>
            <td>{ value }</td>
            <td>{ nameExchange }</td>
            <td>{ askExchange }</td>
            <td>{ convertValue }</td>
            <td>Real</td>
            <td>
              <button
                onClick={ () => this.clickDeleteExpense(id, convertValue) }
                data-testid="delete-btn"
                type="button"
                className="deleteButton"
              >
                Delete
                {/* <img style={ { width: '40px' } } src={ trash } alt="delete" /> */ }
              </button>
              {/* <button
                onClick={ this.ClickEditExpense(id) }
                data-testid="edit-btn"
                type="button"
              >
                <img style={ { width: '40px' } } src={ pencil } alt="edit" />
              </button> */}
            </td>
          </tr>
        );
      })
    );
  }

  render() {
    return (
      <div className="tableExpenses">
        <table>
          <thead>{ this.subtitle() }</thead>
          <tbody>{ this.listExpenses() }</tbody>
        </table>
      </div>
    );
  }
}

TableExpense.propTypes = {
  dispatchDeleteExpense: PropTypes.func.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (stateStore) => ({
  currencies: stateStore.wallet.currencies,
  expenses: stateStore.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchDeleteExpense: (id, convertValue) => dispatch(deleteExpense(id, convertValue)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TableExpense);
