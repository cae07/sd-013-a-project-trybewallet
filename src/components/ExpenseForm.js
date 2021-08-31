// React
import React, { Component } from 'react';

// Children
import CurrencySelect from './CurrencySelect';
import PaymentSelect from './PaymentSelect';
import TagSelect from './TagSelect';

// Formulário de adição de Despesa
class ExpenseForm extends Component {
  render() {
    return (
      <form className="ExpenseForm">
        <label htmlFor="expense-amount">
          Valor
          <input
            type="text"
            id="expense-amount"
            placeholder="Valor"
          />
        </label>
        <label htmlFor="expense-description">
          Descrição
          <textarea
            id="expense-description"
            placeholder="Descreva a sua despesa..."
          />
        </label>
        <CurrencySelect />
        <PaymentSelect />
        <TagSelect />
      </form>
    );
  }
}

export default ExpenseForm;
