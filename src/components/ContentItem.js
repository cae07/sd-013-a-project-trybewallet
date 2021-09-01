import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { refreshItems } from '../actions';

class ContentItem extends React.Component {
  constructor(props) {
    super(props);
    this.getCurrencyName = this.getCurrencyName.bind(this);
  }

  getCurrencyName(exchangeRates, currency) {
    const { name } = exchangeRates[currency];
    return name.split('/')[0];
  }

  getRate(exchangeRates, currency) {
    const { ask } = exchangeRates[currency];
    return ask;
  }

  getConvertedValue(rate, value) {
    const total = Number(rate) * Number(value);
    const roundedTotal = Math.round((total + Number.EPSILON) * 100) / 100;
    return roundedTotal;
  }

  deleteItem(expense) {
    const { expenses, replaceExpenses } = this.props;
    const index = expenses.indexOf(expense);
    const newExpenses = [...expenses];
    newExpenses.splice(index, 1);
    // newExpenses = newExpenses.map((expense, i) => ({ ...expense, id: i }));
    replaceExpenses(newExpenses);
  }

  render() {
    const { expense } = this.props;
    const { value, description, currency, method, tag, exchangeRates } = expense;
    const currencyName = this.getCurrencyName(exchangeRates, currency);
    const rate = this.getRate(exchangeRates, currency);
    const convertedValue = this.getConvertedValue(rate, value);
    const roundedRate = Math.round((rate) * 100) / 100;

    // source: https://stackoverflow.com/questions/11832914/how-to-round-to-at-most-2-decimal-places-if-necessary
    return (
      <tr>
        <td>{description}</td>
        <td>{tag}</td>
        <td>{method}</td>
        <td>{`${value}`}</td>
        <td>{currencyName}</td>
        <td>{`${roundedRate}`}</td>
        <td>{`${convertedValue}`}</td>
        <td>Real</td>
        <td>
          <button
            type="button"
            data-testid="delete-btn"
            onClick={ () => this.deleteItem(expense) }
          >
            Delete
          </button>
          <button type="button" data-testid="edit-btn">Editar despesa</button>
        </td>
      </tr>);
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  replaceExpenses: (payload) => dispatch(refreshItems(payload)),
});

ContentItem.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  expense: PropTypes.shape({
    value: PropTypes.string,
    description: PropTypes.string,
    currency: PropTypes.string,
    method: PropTypes.string,
    tag: PropTypes.string,
    exchangeRates: PropTypes.string,
  }).isRequired,
  replaceExpenses: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContentItem);
