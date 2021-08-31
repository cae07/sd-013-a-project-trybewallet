import React, { Component } from 'react';
import PropTypes from 'prop-types';

class WalletSelect extends Component {
  render() {
    const { labelText, id, ariaLabel, onChange, currencies, value } = this.props;
    return (
      <label htmlFor={ id }>
        {labelText}
        <select value={ value } onChange={ onChange } aria-label={ ariaLabel } id={ id }>
          {currencies.map((coin) => <option key={ coin } value={ coin }>{coin}</option>)}
        </select>
      </label>
    );
  }
}

WalletSelect.propTypes = {
  labelText: PropTypes.string,
}.isRequired;

export default WalletSelect;
