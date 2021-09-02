import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { roundNumber } from '../data';
import { updateExpenses, setExpenseToEdit } from '../actions';

class ExpensesTable extends React.Component {
  constructor(props) {
    super(props);

    this.renderTableData = this.renderTableData.bind(this);
    this.deleteExpense = this.deleteExpense.bind(this);
    this.editExpense = this.editExpense.bind(this);
  }

  editExpense(id) {
    const { expenses, sendEditableExpenseToRedux } = this.props;

    const editableExpense = expenses.find((expense) => expense.id === id);
    sendEditableExpenseToRedux(editableExpense);
  }

  deleteExpense(id) {
    const { expenses, updateTheExpenses } = this.props;

    const updatedExpenses = expenses.filter((expense) => expense.id !== id);
    updateTheExpenses(updatedExpenses);
  }

  renderTableData() {
    const { expenses } = this.props;

    return expenses.map(({
      id, description, tag, method, currency, value, exchangeRates,
    }) => {
      const rates = Object.entries(exchangeRates);
      const rate = rates.find(([name]) => name === currency)[1];
      const { name, ask } = rate;

      return (
        <tr key={ id }>
          <td>{description}</td>
          <td>{tag}</td>
          <td>{method}</td>
          <td>{value}</td>
          <td>{name.split('/')[0]}</td>
          <td>{roundNumber(ask)}</td>
          <td>{roundNumber(Number(value) * Number(ask))}</td>
          <td>Real</td>
          <td>
            <button
              type="button"
              onClick={ () => this.editExpense(id) }
              data-testid="edit-btn"
            >
              Editar
            </button>
            <button
              type="button"
              onClick={ () => this.deleteExpense(id) }
              data-testid="delete-btn"
            >
              Excluir
            </button>
          </td>
        </tr>
      );
    });
  }

  render() {
    return (
      <section>
        <table>
          <tbody>
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
            {this.renderTableData()}
          </tbody>
        </table>
      </section>
    );
  }
}

ExpensesTable.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  updateTheExpenses: PropTypes.func.isRequired,
  sendEditableExpenseToRedux: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  updateTheExpenses: (payload) => dispatch(updateExpenses(payload)),
  sendEditableExpenseToRedux: (payload) => dispatch(setExpenseToEdit(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesTable);
