import PropTypes from 'prop-types';
import React, { Component } from 'react';

class SelectPayment extends Component {
  render() {
    const { selectPayment, onChange } = this.props;
    return (
      <label htmlFor="pay">
        Método de pagamento
        <select
          id="pay"
          name="method"
          value={ selectPayment }
          onChange={ onChange }
        >
          <option>Dinheiro</option>
          <option>Cartão de crédito</option>
          <option>Cartão de débito</option>
        </select>
      </label>
    );
  }
}

SelectPayment.propTypes = {
  onChange: PropTypes.func,
  selectPayment: PropTypes.string,
}.isRequired;

export default SelectPayment;
