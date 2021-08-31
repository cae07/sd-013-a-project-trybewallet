// React
import React, { Component } from 'react';

// PropTypes
import PropTypes from 'prop-types';

class CurrencySelect extends Component {
  render() {
    const { props: { currencies } } = this;
    return (
      <label htmlFor="currency-select">
        Moeda
        <select name="currency" id="currency-select">
          {
            currencies.map((code) => (
              <option key={ code } value={ code }>{ code }</option>
            ))
          }
        </select>
      </label>
    );
  }
}

CurrencySelect.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CurrencySelect;
