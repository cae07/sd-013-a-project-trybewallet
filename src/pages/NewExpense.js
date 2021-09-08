import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { deleteExpenses } from '../actions';

class NewExpense extends React.Component {
  handleClick(e) {
    const { setExpenses } = this.props;
    setExpenses(e);
  }

  render() {
    const { expense } = this.props;
    const { description, tag, method, value, currency, exchangeRates } = expense;
    const limit = exchangeRates[currency].name.indexOf('/');
    const formula = exchangeRates[currency].name.substr(0, limit);
    let name = (currency === 'USD') ? 'Dólar Comercial' : formula;
    name = (currency === 'EUR') ? 'Euro' : name;
    const exchange = Number(exchangeRates[currency].ask);
    const converted = Number(exchange) * Number(value);
    return (
      <tr>
        <td>{ description }</td>
        <td>{ tag }</td>
        <td>{ method }</td>
        <td>{ value }</td>
        <td>{ name }</td>
        <td>{ exchange.toFixed(2) }</td>
        <td>{ converted.toFixed(2) }</td>
        <td>Real</td>
        <td>
          <button type="submit">Editar</button>
          <button
            type="submit"
            data-testid="delete-btn"
            onClick={ () => this.handleClick(expense) }
          >
            Excluir
          </button>
        </td>
      </tr>
    );
  }
}

NewExpense.propTypes = {
  expense: PropTypes.shape({
    description: PropTypes.string,
    tag: PropTypes.string,
    method: PropTypes.string,
    value: PropTypes.string,
    currency: PropTypes.string,
    exchangeRates: PropTypes.string,
  }),
  setExpenses: PropTypes.func,
}.isRequired;

const mapStateToProps = (state) => ({ expenses: state.wallet.expenses });

const mapDispatchToProps = (dispatch) => ({
  setExpenses: (expenses) => dispatch(deleteExpenses(expenses)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewExpense);
