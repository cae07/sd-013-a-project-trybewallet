import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { economySaveExpense } from '../actions/index';
import getEconomyAwesome from '../services/economyAPI';

class ExpenseForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      value: 0,
      method: 'Dinheiro',
      currency: 'USD',
      tag: 'Lazer',
      description: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.renderInput = this.renderInput.bind(this);
    this.renderSelect2 = this.renderSelect2.bind(this);
    this.renderSelect = this.renderSelect.bind(this);
    this.ButtonExpenses = this.ButtonExpenses.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  async ButtonExpenses(e) {
    e.preventDefault();
    const exchangeRates = await getEconomyAwesome();
    const { AddExpense } = this.props;
    const { value, description, currency, method, tag, id } = this.state;
    const add = {
      id,
      value,
      currency,
      method,
      tag,
      description,
      exchangeRates,
    };

    AddExpense(add);

    this.setState({ id: id + 1 });
  }

  renderInput(label, type, name, value) {
    return (
      <label htmlFor={ `${name}-input` }>
        {`${label}: `}
        <input
          type={ type }
          id={ `${name}-input` }
          name={ name }
          data-testid={ `${name}-input` }
          value={ value }
          className={ `${name}-input` }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  renderSelectCurrencies(value) {
    const { currencies } = this.props;
    return (
      <label htmlFor="currency-input">
        Moeda:
        <select
          id="currency-input"
          name="currency"
          data-testid="currency-input"
          onChange={ this.handleChange }
          value={ value }
          className="currency-input"
        >
          {currencies.map((currency) => {
            if (currency === 'USDT') return '';
            return (
              <option
                key={ currency }
                data-testid={ currency }
              >
                {currency}
              </option>
            );
          })}
        </select>
      </label>
    );
  }

  renderSelect2() {
    const { method } = this.state;
    const methodsOptions = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    return (
      <label htmlFor="methods-input">
        Método de pagamento:
        <select
          id="methods-input"
          name="method"
          data-testid="methods-input"
          onChange={ this.handleChange }
          value={ method }
        >
          {methodsOptions.map((option) => (
            <option key={ option }>{option}</option>
          ))}
        </select>
      </label>
    );
  }

  renderSelect() {
    const tagsOptions = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    const { tag } = this.state;
    return (
      <label htmlFor="tags-input">
        Tag:
        <select
          id="tags-input"
          name="tag"
          data-testid="methods-input"
          onChange={ this.handleChange }
          value={ tag }
        >
          {tagsOptions.map((option) => (
            <option key={ option }>{option}</option>
          ))}
        </select>
      </label>
    );
  }

  render() {
    const { value, description, currency } = this.state;
    return (
      <div>
        <form>
          {this.renderInput('Valor', 'number', 'value', value)}
          {this.renderInput('Descrição', 'text', 'description', description)}
          {this.renderSelectCurrencies(currency)}
          {this.renderSelect2()}
          {this.renderSelect()}
          <button
            type="button"
            onClick={ this.ButtonExpenses }
          >
            Adicionar despesa
          </button>
        </form>
      </div>
    );
  }
}

ExpenseForm.propTypes = {
  currencies: PropTypes.func,
}.isRequired;

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  AddExpense: (payload) => dispatch(economySaveExpense(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseForm);
