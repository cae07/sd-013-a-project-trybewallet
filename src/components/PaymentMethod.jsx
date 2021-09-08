import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PaymentMethod extends Component {
  render() {
    const { paymentMethod, handleChange } = this.props;
    return (
      <label htmlFor="payment">
        Método de pagamento
        <select
          name="paymentMethod"
          id="payment"
          value={ paymentMethod }
          onChange={ (e) => handleChange(e) }
        >
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
        </select>
      </label>
    );
  }
}

PaymentMethod.propTypes = {
  paymentMethod: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default PaymentMethod;
