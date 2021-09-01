import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import economyAPI, { economySaveExpense } from '../actions/index';

class ExpenseForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      description: '',
      currency: '',
      method: '',
      tag: '',
      id: 0,
    };
    this.handleChange = this.handleChange.bind(this);
    this.renderInput = this.renderInput.bind(this);
    this.renderSelect = this.renderSelect.bind(this);
    this.ButtonExpenses = this.ButtonExpenses.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  async ButtonExpenses(e) {
    e.preventDefault();
    const exchangeRates = await economyAPI();
    const { AddExpense } = this.props;
    const { value, description, currency, method, tag, id } = this.state;
    const add = {
      description,
      currency,
      method,
      value,
      tag,
      id,
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
              <option key={ currency } data-testid={ currency }>
                {currency}
              </option>
            );
          })}
        </select>
      </label>
    );
  }

  renderSelect(label, name, value, options) {
    return (
      <label htmlFor={ `${name}-input` }>
        {`${label}: `}
        <select
          id={ `${name}-input` }
          name={ name }
          data-testid={ `${name}-input` }
          onChange={ this.handleChange }
          value={ value }
        >
          {options.map((option) => (
            <option key={ option }>{option}</option>
          ))}
        </select>
      </label>
    );
  }

  render() {
    const { value, description, currency, method, tag } = this.state;
    const tags = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    const methods = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    return (
      <div>
        <form>
          {this.renderInput('Valor', 'number', 'value', value)}
          {this.renderInput('Descrição', 'text', 'description', description)}
          {this.renderSelectCurrencies(currency)}
          {this.renderSelect(' Método de pagamento', 'methods', method, methods)}
          {this.renderSelect(' Tag', 'tags', tag, tags)}
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
