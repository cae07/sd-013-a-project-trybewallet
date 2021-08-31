import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ExpanseTable extends Component {
  render() {
    const { data: {
      value,
      description,
      method,
      tag,
      currency,
      exchangeRates,
    } } = this.props;
    return (
      <tr>
        <td>{description}</td>
        <td>{tag}</td>
        <td>{method}</td>
        <td>
          {`${parseFloat(value)}`}
        </td>
        <td>{exchangeRates[currency].name.split('/')[0]}</td>
        <td>
          {parseFloat(exchangeRates[currency].ask).toFixed(2)}
        </td>
        <td>
          {parseFloat(exchangeRates[currency].ask * value).toFixed(2)}
        </td>
        <td>Real</td>
      </tr>
    );
  }
}

ExpanseTable.propTypes = {
  data: PropTypes.shape({
    value: PropTypes.string,
    description: PropTypes.string,
    method: PropTypes.string,
    tag: PropTypes.string,
    currency: PropTypes.string,
    exchangeRates: PropTypes.shape({}),
  }).isRequired,
};

export default ExpanseTable;
