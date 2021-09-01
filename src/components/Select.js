import React, { Component } from 'react';

class Select extends Component {
  render() {
    return (
      <div>
        <label
          htmlFor="moeda"
        >
          Moeda
          <select
            id="moeda"
          >
            <option>0</option>
          </select>
        </label>
        <label
          htmlFor="pagamento"
        >
          Método de pagamento
          <select
            id="pagamento"
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de cŕedito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label
          htmlFor="tag"
        >
          Tag
          <select
            id="tag"
          >
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
      </div>
    );
  }
}

export default Select;
