import React, { Component } from 'react';

class Payment extends Component {
  render() {
    return (
      <label htmlFor="payment">
        Método de pagamento:
        <select name="payment" id="payment">
          <option>Dinheiro</option>
          <option>Cartão de crédito</option>
          <option>Cartão de débito</option>
        </select>
      </label>
    );
  }
}

export default Payment;
