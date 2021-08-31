import React from 'react';

class ExpenseForm extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="input-value">
          Valor
          <input
            type="number"
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
        <label htmlFor="select-currency">
          Moeda
          <select
            name="currency"
            id="select-currency"
          >
            <option value="">{' '}</option>
          </select>
        </label>
        <label htmlFor="payment-method">
          Método de Pagamento
          <select name="payment" id="payment-method">
            <option value="money">Dinheiro</option>
            <option value="creditcard">Cartão de Crédito</option>
            <option value="debitcard">Cartão de Débito</option>
          </select>
        </label>
        <label htmlFor="select-tag">
          Tag
          <select name="tag" id="select-tag">
            <option value="food">Alimentação</option>
            <option value="leisure">Lazer</option>
            <option value="work">Trabalho</option>
            <option value="locomotion">Transporte</option>
            <option value="health">Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

export default ExpenseForm;
