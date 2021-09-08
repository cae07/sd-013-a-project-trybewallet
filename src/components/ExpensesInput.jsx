import React, { Component } from 'react';
import PropTypes from 'prop-types';

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

ExpensesInput.propTypes = {
  kindExpense: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default ExpensesInput;
