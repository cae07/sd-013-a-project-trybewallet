import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class ExpensesTable extends React.Component {
  render() {
    const { expenses } = this.props;
    return (
      <div>
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
            { expenses.map((
              { id, description, tag, currency, method, value, exchangeRates },
            ) => (
              <tr key={ id }>
                <td>{ description }</td>
                <td>{ tag }</td>
                <td>{ method }</td>
                <td>
                  {/* { exchangeRates[currency].code } */}
                  { value }
                </td>
                <td>{ exchangeRates[currency].name }</td>
                <td>{ parseFloat(exchangeRates[currency].ask).toFixed(2) }</td>
                <td>{ parseFloat(exchangeRates[currency].ask * value).toFixed(2) }</td>
                <td>Real</td>
                <td>
                  <button type="button" data-testid="edit-btn">Editar</button>
                  <button type="button" data-testid="delete-btn">Excluir</button>
                </td>
              </tr>
            )) }
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

// const mapDispatchToProps = (dispatch) => ({
//   addExpense: (expense) => dispatch(setExpenses(expense)),
//   getCurrencies: () => dispatch(setCurrencies()),
// });

ExpensesTable.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, null)(ExpensesTable);
