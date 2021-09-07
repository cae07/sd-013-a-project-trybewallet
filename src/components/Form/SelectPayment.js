import React, { Component } from 'react';

class SelectPayment extends Component {
  render() {
    return (
      <label htmlFor="pay">
        Método de pagamento
        <select id="pay">
          <option>Dinheiro</option>
          <option>Cartão de crédito</option>
          <option>Cartão de débito</option>
        </select>
      </label>
    );
  }
}

export default SelectPayment;
