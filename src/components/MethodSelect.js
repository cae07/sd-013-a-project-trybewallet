// React
import React, { Component } from 'react';

// PropTypes
import PropTypes from 'prop-types';

class MethodSelect extends Component {
  render() {
    const { props: { handleChange, defaultValue } } = this;
    return (
      <label htmlFor="payment-method-select">
        Método de pagamento
        <select
          name="method"
          id="payment-method-select"
          onChange={ (evt) => handleChange(evt) }
          defaultValue={ defaultValue }
        >
          <option value="" disabled>Selecione um método de pagamento</option>
          <option value="Dinheiro" checked>Dinheiro</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
        </select>
      </label>
    );
  }
}

MethodSelect.propTypes = {
  handleChange: PropTypes.func.isRequired,
  defaultValue: PropTypes.string.isRequired,
};

export default MethodSelect;
