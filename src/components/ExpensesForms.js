import React from 'react';

// 5.1.1 - criar o componente
class ExpensesForm extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="expense">
          Valor:
          <input type="number" id="expense" />
        </label>
        <label htmlFor="currency">
          Moeda:
          <select id="currency" name="currency">
            <option>Vazio</option>
          </select>
        </label>
        <label htmlFor="pay-method">
          Método de pagamento:
          <select id="pay-method" name="pay-method">
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
            <option value="Dinheiro">Dinheiro</option>
          </select>
        </label>
        <label htmlFor="tag">
          tag:
          <select id="tag" name="tag">
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
        <label htmlFor="description">
          Descrição:
          <input type="text" id="description" />
        </label>
      </form>
    );
  }
}

export default ExpensesForm;
