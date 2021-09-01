import React from 'react';

class NewExpense extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="value">
          Valor
          <input type="number" name="value" id="value" />
        </label>
        <label htmlFor="description">
          Descrição
          <input type="text" name="description" id="description" />
        </label>
        <label htmlFor="currency">
          Moeda
          <select
            id="currency"
            name="currency"
          >
            ???
          </select>
        </label>
        <label htmlFor="methods">
          Método de pagamento
          <select label="methods" id="methods" name="methods">
            <option>Dinheiro</option>
            <option>Cartão de Crédito</option>
            <option>Cartão de Débito</option>
          </select>
        </label>
        <label htmlFor="tags">
          Tag
          <select label="tags" id="tags" name="tags">
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

export default NewExpense;
