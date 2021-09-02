import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SelectMethod extends Component {
  render() {
    const {
      value,
      onChange,
    } = this.props;

    return (
      <label htmlFor="method">
        Método de pagamento
        <select value={ value } id="method" onChange={ onChange }>
          <option>Dinheiro</option>
          <option>Cartão de crédito</option>
          <option>Cartão de débito</option>
        </select>
      </label>
    );
  }
}

SelectMethod.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
}.isRequired;

export default SelectMethod;
