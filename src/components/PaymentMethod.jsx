import React, { Component } from 'react';

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

export default PaymentMethod;
