import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fixedRounded } from '../helpers';
import { expenseExcluded } from '../actions';

class ExpenseRow extends React.Component {
  constructor() {
    super();

    this.handleExclusion = this.handleExclusion.bind(this);
  }

  handleExclusion({ target }) {
    const { excludeExpense } = this.props;

    // https://developer.mozilla.org/pt-BR/docs/Learn/HTML/Howto/Use_data_attributes
    excludeExpense(target.dataset.expenseid);
  }

  render() {
    const {
      expense: {
        id,
        description,
        tag,
        method,
        value,
        currency,
        exchangeRates,
      },
    } = this.props;

    const currencyName = exchangeRates[currency].name;
    const exchangeUsed = exchangeRates[currency].ask;
    const exchangedValue = value * exchangeUsed;

    return (
      <tr>
        <td>{description}</td>
        <td>{tag}</td>
        <td>{method}</td>
        <td>{value}</td>
        <td>{currencyName}</td>
        <td>
          {fixedRounded(exchangeUsed)}
        </td>
        <td>
          {fixedRounded(exchangedValue)}
        </td>
        <td>Real</td>
        <td>
          <button
            type="button"
            data-testid="delete-btn"
            data-expenseid={ id }
            onClick={ this.handleExclusion }
          >
            Excluir
          </button>
        </td>
      </tr>
    );
  }
}

ExpenseRow.propTypes = {
  description: PropTypes.string,
  tag: PropTypes.string,
  method: PropTypes.string,
  currency: PropTypes.string,
  exchangeRates: PropTypes.shape({}),
}.isRequired;

const mapDispatchToProps = (dispatch) => ({
  excludeExpense: (expenseId) => dispatch(expenseExcluded(expenseId)),
});

export default connect(null, mapDispatchToProps)(ExpenseRow);
