import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import { insertExpenses } from '../actions';
import Header from './Header';
import TagSelect from './TagSelect';
import MethodSelect from './MethodSelect';
import Expenses from './Expenses';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      currency: '',
      description: '',
      exchangeRates: {},
      id: 0,
      method: '',
      tag: '',
      value: '',
    };
    this.fetchCurrencies();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.isChange = this.isChange.bind(this);
  }

  currenciesOptions() {
    const select = document.querySelector('#currency');
    const { exchangeRates } = this.state;
    console.log(exchangeRates);
    Object.keys(exchangeRates).forEach((currency, i) => {
      if (currency !== 'USDT') {
        const newOption = document.createElement('option');
        newOption.id = i;
        newOption.value = currency;
        newOption.textContent = currency;
        select.appendChild(newOption);
      }
    });
  }

  async fetchCurrencies() {
    const currencies = fetch('https://economia.awesomeapi.com.br/json/all');
    const response = await currencies;
    this.setState({
      exchangeRates: await response.json(),
    });
    this.currenciesOptions();
  }

  async handleSubmit(e) {
    e.preventDefault();
    const { setExpenses, expenses } = this.props;
    const currencies = fetch('https://economia.awesomeapi.com.br/json/all');
    const response = await currencies;
    this.setState({
      id: expenses.length,
      exchangeRates: await response.json(),
    });
    setExpenses(this.state);
  }

  isChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  render() {
    return (
      <>
        <Header />
        <form onSubmit={ this.handleSubmit }>
          <label htmlFor="value">
            Valor
            <input type="number" id="value" name="value" onChange={ this.isChange } />
          </label>
          <label htmlFor="currency">
            Moeda:
            <select id="currency" name="currency" onChange={ this.isChange }> </select>
          </label>
          <label htmlFor="paymentMethod">
            Método de pagamento:
            <select
              id="paymentMethod"
              name="method"
              onChange={ this.isChange }
            >
              <MethodSelect />
            </select>
          </label>
          <label htmlFor="tag">
            Tag:
            <select
              id="tag"
              name="tag"
              onChange={ this.isChange }
            >
              <TagSelect />
            </select>
          </label>
          <label htmlFor="des">
            Descrição:
            <textarea id="des" name="description" onChange={ this.isChange }> </textarea>
          </label>
          <button type="submit">Adicionar Despesa</button>
        </form>
        <Expenses />
      </>
    );
  }
}

Wallet.propTypes = {
  expenses: PropTypes.arrayOf(),
  setExpenses: PropTypes.func,
}.isRequired;

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  setExpenses: (expenses) => dispatch(insertExpenses(expenses)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
