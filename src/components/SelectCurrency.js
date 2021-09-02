import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SelectMethod extends Component {
  render() {
    const {
      value,
      onChange,
      currencies,
    } = this.props;

    return (
      <label htmlFor="currency">
        Moeda
        <select value={ value } id="currency" onChange={ onChange }>
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
  value: PropTypes.string,
}.isRequired;

export default SelectMethod;
