import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="value">
          Valor
          <input type="text" name="value" id="value" />
        </label>

        <label htmlFor="description">
          Descrição
          <input type="text" name="description" id="description" />
        </label>

        <label htmlFor="currency">
          Moeda
          <select name="currency" id="currency">
            <option>Moeda</option>
          </select>
        </label>

        <label htmlFor="payment">
          Método de Pagamento
          <select name="payment" id="payment">
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>

        <label htmlFor="tag">
          Tag
          <select name="tag" id="tag">
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

export default Form;
