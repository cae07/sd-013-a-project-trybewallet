import React, { Component } from 'react';
import PropTypes from 'prop-types';

class WalletInput extends Component {
  render() {
    const { labelText, id, onChange, value } = this.props;
    return (
      <label htmlFor={ id }>
        {labelText}
        <input value={ value } onChange={ onChange } id={ id } type="text" />
      </label>
    );
  }
}

WalletInput.propTypes = {
  labelText: PropTypes.string,
}.isRequired;

export default WalletInput;
