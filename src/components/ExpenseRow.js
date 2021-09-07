import React from 'react';
import PropTypes from 'prop-types';
import { fixedRounded } from '../helpers';

class ExpenseRow extends React.Component {
  render() {
    const {
      expense: {
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
        <td>Buttons</td>
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

export default ExpenseRow;
