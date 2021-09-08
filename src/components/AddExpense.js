import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { expenseAdded } from '../actions';
import fetchCurrencies from '../helpers/fetchers';

class AddExpense extends React.Component {
  constructor() {
    super();

    this.state = {
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Lazer',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.renderValue = this.renderValue.bind(this);
    this.renderTag = this.renderTag.bind(this);
  }

  async handleClick() {
    const { value, description, currency, method, tag } = this.state;
    const { saveExpense } = this.props;

    const updatedCurrencies = await fetchCurrencies();

    const expense = {
      value,
      description,
      currency,
      method,
      tag,
      exchangeRates: updatedCurrencies,
    };

    saveExpense(expense); // Dispatch the action
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  renderValue() {
    return (
      <label htmlFor="value">
        Valor
        <input
          id="value"
          type="number"
          min="0.01"
          step="0.01"
          name="value"
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  renderTag() {
    return (
      <label htmlFor="tag">
        Tag
        <select id="tag" name="tag" onChange={ this.handleChange }>
          <option value="Alimentação">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saúde">Saúde</option>
        </select>
      </label>
    );
  }

  render() {
    const { currencies } = this.props;

    const currencyCodes = Object.keys(currencies);

    return (
      <form>
        {this.renderValue()}
        <label htmlFor="description">
          Descrição
          <input
            id="description"
            type="text"
            name="description"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="currency">
          Moeda
          <select id="currency" name="currency" onChange={ this.handleChange }>
            {currencyCodes.map((code) => (
              <option key={ code } value={ code }>{ code }</option>
            ))}
          </select>
        </label>
        <label htmlFor="method">
          Método de pagamento
          <select id="method" name="method" onChange={ this.handleChange }>
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        {this.renderTag()}
        <button type="button" onClick={ this.handleClick }>Adicionar despesa</button>
      </form>
    );
  }
}

AddExpense.propTypes = {
  saveExpense: PropTypes.func.isRequired,
  currencies: PropTypes.shape({ }).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  saveExpense: (expense) => dispatch(expenseAdded(expense)),
});

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps, mapDispatchToProps)(AddExpense);
