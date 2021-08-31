import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="input-value">
          Valor
          <input
            type="text"
            id="input-value"
          />
        </label>
        <label htmlFor="input-description">
          Descrição
          <input
            type="text"
            id="input-description"
          />
        </label>
        <label htmlFor="input-change">
          Moeda
          <select id="input-change" />
        </label>
        <label htmlFor="input-payment">
          Método de pagamento
          <select name="" id="input-payment">
            <option value="money">Dinheiro</option>
            <option value="debit">Cartão de crédito</option>
            <option value="credit">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="input-why">
          Tag
          <select name="" id="input-why">
            <option value="food">Alimentação</option>
            <option value="play">Lazer</option>
            <option value="work">Trabalho</option>
            <option value="transport">Transporte</option>
            <option value="health">Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

export default Form;
