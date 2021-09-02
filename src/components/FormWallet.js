import React from 'react';

class FormWallet extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="value">
          Valor
          <input id="value" type="number" />
        </label>
        <label htmlFor="description">
          Descrição
          <textarea id="description" />
        </label>
        <label htmlFor="currency">
          Moeda
          <select id="currency">Moeda</select>
        </label>
        <label htmlFor="payment">
          Método de pagamento
          <select id="payment">
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select id="tag">
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

export default FormWallet;
