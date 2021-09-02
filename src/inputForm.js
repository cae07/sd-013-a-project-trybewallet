import React from 'react';
import { connect } from 'react-redux';

class InputForm extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="inputDespesas">
          Valor
          <input id="inputDespesas" type="number" />
        </label>
        <label htmlFor="inputDescricao">
          Descrição
          <input id="inputDescricao" type="text" />
        </label>
        <label htmlFor="currencyInput">
          Moeda
          <select id="currencyInput">
            0
          </select>
        </label>
        <label htmlFor="paymentInput">
          Método de pagamento
          <select id="paymentInput">
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tagInput">
          Tag
          <select id="tagInput">
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

export default connect(null, null)(InputForm);
