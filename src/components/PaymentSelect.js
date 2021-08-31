import React, { Component } from 'react';

class PaymentSelect extends Component {
  render() {
    return (
      <label htmlFor="payment-method-select">
        Método de pagamento
        <select name="payment-method-select" id="payment-method-select">
          <option value="" checked disabled>Selecione um método de pagamento</option>
          <option value="cash">Dinheiro</option>
          <option value="credit-card">Cartão de crédito</option>
          <option value="debit-card">Cartão de débito</option>
        </select>
      </label>
    );
  }
}

export default PaymentSelect;
