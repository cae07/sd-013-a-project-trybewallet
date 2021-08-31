import React, { Component } from 'react';

class walletForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('clicou');
  }

  render() {
    return (
      <form onSubmit={ this.handleSubmit }>
        <label htmlFor="input-value">
          Valor:
          <input type="text" name="name" id="input-value" />
        </label>

        <label htmlFor="select-currency">
          Moeda:
          <select name="currency" id="select-currency">
            <option value="">EUR</option>
            <option value="">USD</option>
          </select>
        </label>

        <label htmlFor="select-payment">
          Método de pagamento:
          <select name="payment" id="select-payment">
            <option value="">Cartão de crédito</option>
            <option value="">Cartão de débito</option>
            <option value="">Dinheiro</option>
          </select>
        </label>

        <label htmlFor="select-tag">
          Tag:
          <select name="tag" id="select-tag">
            <option value="">Alimentação</option>
            <option value="">Lazer</option>
            <option value="">Trabalho</option>
            <option value="">Transporte</option>
            <option value="">Saúde</option>
          </select>
        </label>

        <label htmlFor="input-description">
          Descrição:
          <input type="text" name="description" id="input-description" />
        </label>

        <button type="submit">Adicionar Despesas</button>
      </form>
    );
  }
}

export default walletForm;
