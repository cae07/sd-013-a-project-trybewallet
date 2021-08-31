import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <>
        <label htmlFor="payment">
          Método de pagamento
          <select name="payment" id="payment">
            <option value="">Método de pagamento</option>
            <option value="cash">Dinheiro</option>
            <option value="credit-card">Cartão de crédito</option>
            <option value="debit-card">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="currency">
          Moeda
          <select name="currency" id="currency">
            <option value="">Moeda</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select name="tag" id="tag">
            <option value="">Categoria</option>
            <option value="food">Alimentação</option>
            <option value="leisure">Lazer</option>
            <option value="work">Trabalho</option>
            <option value="commute">Transporte</option>
            <option value="health">Saúde</option>
            <option value="other">Outro</option>
          </select>
        </label>
      </>
    );
  }
}

export default Form;
