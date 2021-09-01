import React, { Component } from 'react';

class Payment extends Component {
  render() {
    return (
      <label>
        Método de pagamento
        <select>
          <option>Dinheiro</option>
          <option>Cartão de crédito</option>
          <option>Cartão de débito</option>
        </select>
      </label>
    )
  }
}

export default Payment;
