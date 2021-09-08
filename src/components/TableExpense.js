import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteExpense, editExpense } from '../actions';

class TableExpense extends React.Component {
  constructor(props) {
    super(props);

    this.subtitle = this.subtitle.bind(this);
    this.listExpenses = this.listExpenses.bind(this);
    this.clickDeleteExpense = this.clickDeleteExpense.bind(this);
    // this.filterExpenseId = this.filterExpenseId.bind(this);
    this.clickEditExpense = this.clickEditExpense.bind(this);
  }

  subtitle() {
    return (
      <tr>
        <th className="subtitleColumnDesc">Descrição</th>
        <th className="subtitleColumnTag">Tag</th>
        <th className="subtitleColumnMeth">Método de pagamento</th>
        <th className="subtitleColumnValu">Valor</th>
        <th className="subtitleColumnCoin">Moeda</th>
        <th className="subtitleColumnCamb">Câmbio utilizado</th>
        <th className="subtitleColumnValu">Valor convertido</th>
        <th className="subtitleColumnCoin">Moeda de conversão</th>
        <th className="subtitleColumnEdit">Editar/Excluir</th>
      </tr>
    );
  }

  // filterExpenseId(id) {
  //   const { expenses } = this.props;
  //   return expenses.id === id;
  // }

  clickDeleteExpense(id, convertValue) {
    const { dispatchDeleteExpense } = this.props;
    dispatchDeleteExpense(id, convertValue);
  }

  clickEditExpense(id) {
    const { dispatchEditExpense, expenses } = this.props;
    const expenseInEdition = {
      id,
      value: expenses[id].value,
      tag: expenses[id].tag,
      method: expenses[id].method,
      description: expenses[id].description,
      exchangeRates: expenses[id].exchangeRates,
    };
    dispatchEditExpense(expenseInEdition);
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
          <tr className="expenseRow" key={ id }>
            <td className="expenseDesc">{ description }</td>
            <td className="expenseTag">{ tag }</td>
            <td className="expenseMeth">{ method }</td>
            <td className="expenseValu">{ value }</td>
            <td className="expenseExch">{ nameExchange }</td>
            <td className="expenseAsk">{ askExchange }</td>
            <td className="expenseConvValue">{ convertValue }</td>
            <td className="expenseReal">Real</td>
            <td className="expenseButtons">
              <button
                onClick={ () => this.clickDeleteExpense(id, convertValue) }
                data-testid="delete-btn"
                type="button"
                className="deleteButton"
              >
                Delete
              </button>
              <button
                onClick={ () => this.clickEditExpense(id) }
                data-testid="edit-btn"
                type="button"
                className="editButton"
              >
                Editar
              </button>
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
  dispatchEditExpense: PropTypes.func.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (stateStore) => ({
  currencies: stateStore.wallet.currencies,
  expenses: stateStore.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchDeleteExpense: (id, convertValue) => dispatch(deleteExpense(id, convertValue)),
  dispatchEditExpense: (expenseInEdition) => dispatch(editExpense(expenseInEdition)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TableExpense);
