import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SelectMethod extends Component {
  render() {
    const {
      onChange,
      currencies,
    } = this.props;

    return (
      <label htmlFor="currency">
        Moeda
        <select id="currency" onChange={ onChange }>
          {currencies.map((currency, index) => (
            <option key={ index }>
              {currency}
            </option>
          ))}
        </select>
      </label>
    );
  }
}

SelectMethod.propTypes = {
  onChange: PropTypes.func,
  currencies: PropTypes.array,
}.isRequired;

export default SelectMethod;
