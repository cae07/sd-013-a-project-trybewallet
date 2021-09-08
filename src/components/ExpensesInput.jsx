import React, { Component } from 'react';

class ExpensesInput extends Component {
  render() {
    const { kindExpense, handleChange } = this.props;
    return (
      <label htmlFor="expenses">
        Tag
        <select
          name="kindExpense"
          id="expenses"
          value={ kindExpense }
          onChange={ (e) => handleChange(e) }
        >
          <option value="Alimentação">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saúde">Saúde</option>
        </select>
      </label>
    );
  }
}

export default ExpensesInput;
