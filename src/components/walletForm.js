import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchCurrencies, addExpense, updateTotal } from '../actions';

class walletForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      currency: 'USD',
      method: 'Cartão de crédito',
      tag: 'Alimentação',
      description: '',
      exchangeRates: {},
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState((state) => ({
      ...state, [name]: value,
    }));
  }

  async exchangeRates() {
    const { currencies, getCurrencies } = this.props;
    await getCurrencies();
    await this.setState((state) => ({
      ...state,
      exchangeRates: currencies[0],
    }));
  }

  async handleSubmit(e) {
    e.preventDefault();
    const { addExpenseProp, updateTotalProp } = this.props;
    await this.exchangeRates();
    addExpenseProp(this.state);
    updateTotalProp();
    console.log(this.state);
    this.setState((state) => ({
      ...state,
      value: '',
      description: '',
      exchangeRates: {},
    }));
  }

  renderCurrencyOptions() {
    const { currencies } = this.props;
    if (currencies.length > 0) {
      return Object.keys(currencies[0]).map((currency, index) => (
        <option key={ index } value={ currency }>{ currency }</option>
      ));
    }
  }

  renderMethodOptions() {
    const methods = ['Cartão de crédito', 'Cartão de débito', 'Dinheiro'];
    return methods.map((method, index) => (
      <option key={ index } value={ method }>{ method }</option>
    ));
  }

  renderTagOptions() {
    const tags = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    return tags.map((tag, index) => (
      <option key={ index } value={ tag }>{ tag }</option>
    ));
  }

  renderInput(type, name, id, value) {
    return (
      <input
        type={ type }
        name={ name }
        id={ id }
        value={ value }
        onChange={ this.handleChange }
        required
      />
    );
  }

  render() {
    const { value, currency, method, tag, description } = this.state;
    const { handleChange, handleSubmit } = this;
    return (
      <form onSubmit={ handleSubmit }>
        <label htmlFor="input-value">
          Valor:
          { this.renderInput('number', 'value', 'input-value', value) }
        </label>
        <label htmlFor="select-currency">
          Moeda:
          <select
            name="currency"
            id="select-currency"
            value={ currency }
            onChange={ handleChange }
          >
            { this.renderCurrencyOptions() }
          </select>
        </label>
        <label htmlFor="select-payment">
          Método de pagamento:
          <select
            name="method"
            id="select-payment"
            value={ method }
            onChange={ handleChange }
          >
            { this.renderMethodOptions() }
          </select>
        </label>
        <label htmlFor="select-tag">
          Tag:
          <select name="tag" id="select-tag" value={ tag } onChange={ handleChange }>
            { this.renderTagOptions() }
          </select>
        </label>
        <label htmlFor="input-description">
          Descrição:
          { this.renderInput('text', 'description', 'input-description', description) }
        </label>
        <button type="submit">Adicionar Despesas</button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(fetchCurrencies()),
  addExpenseProp: (expense) => dispatch(addExpense(expense)),
  updateTotalProp: () => dispatch(updateTotal()),
});

walletForm.propTypes = {
  currencies: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.object),
    PropTypes.arrayOf(PropTypes.string),
  ]).isRequired,
  getCurrencies: PropTypes.func.isRequired,
  addExpenseProp: PropTypes.func.isRequired,
  updateTotalProp: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(walletForm);
