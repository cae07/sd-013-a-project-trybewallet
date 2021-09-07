import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { removeExpense } from '../actions';

const tableHeader = ['Descrição', 'Tag', 'Método de pagamento', 'Valor',
  'Moeda', 'Câmbio utilizado', 'Valor convertido', 'Moeda de conversão',
  'Editar/Excluir'];

class ExpenseTable extends React.Component {
  constructor() {
    super();

    this.deleteButton = this.deleteButton.bind(this);
  }

  deleteButton(id) {
    const { expenses, deleteExpense } = this.props;
    const filtered = expenses.filter((expense) => expense.id !== id);
    deleteExpense(filtered);
  }

  render() {
    const { expenses } = this.props;
    if (expenses.length === 0) return <div>Ainda não temos despesas registradas!</div>;
    return (
      <div>
        <table>
          <tr>
            { tableHeader.map((item, index) => <th key={ index }>{ item }</th>)}
          </tr>
          {
            expenses
              .map(
                ({ description, tag, method, value, currency, exchangeRates, id }) => (
                  <tr key={ id }>
                    <td>{ description }</td>
                    <td>{ tag }</td>
                    <td>{ method }</td>
                    <td>{ value }</td>
                    <td>
                      { exchangeRates[currency].name.split('/')[0] }
                    </td>
                    <td>{ Math.round(exchangeRates[currency].ask * 100) / 100 }</td>
                    <td>
                      {
                        (Math.round(exchangeRates[currency].ask * value * 100) / 100)
                      }
                    </td>
                    <td>Real</td>
                    <td>
                      <button
                        type="button"
                        onClick={ () => this.deleteButton(id) }
                        data-testid="delete-btn"
                      >
                        Excluir
                      </button>
                      <button type="button">
                        Editar
                      </button>
                    </td>
                  </tr>
                ),
              )
          }
        </table>
      </div>
    );
  }
}

ExpenseTable.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteExpense: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  deleteExpense: (payload) => dispatch(removeExpense(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseTable);
