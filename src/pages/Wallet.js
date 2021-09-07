import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import { insertExpenses } from '../actions';
import Header from './Header';
// import TagSelect from './TagSelect';

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
  }

  currenciesOptions() {
    const select = document.querySelector('#currency');
    const { exchangeRates } = this.state;
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

  render() {
    return (
      <>
        <Header />
        <form onSubmit={ this.handleSubmit }>
          <label htmlFor="value">
            Valor
            <input
              type="number"
              id="value"
              onChange={ ({ target }) => this.setState({ value: target.value }) }
            />
          </label>
          <label htmlFor="currency">
            Moeda:
            <select
              id="currency"
              onChange={ ({ target }) => this.setState({ currency: target.value }) }
            >
            </select>
          </label>
          <label htmlFor="paymentMethod">
            Método de pagamento:
            <select
              id="paymentMethod"
              onChange={ ({ target }) => this.setState({ method: target.value }) }
            >
              <option value="Dinheiro">Dinheiro</option>
              <option value="Cartão de crédito">Cartão de crédito</option>
              <option value="Cartão de débito">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag">
            Tag:
            <select
              id="tag"
              onChange={ ({ target }) => this.setState({ tag: target.value }) }
            >
              <option value="Alimentação">Alimentação</option>
              <option value="Lazer">Lazer</option>
              <option value="Trabalho">Trabalho</option>
              <option value="Transporte">Transporte</option>
              <option value="Saúde">Saúde</option>
            </select>
          </label>
          <label htmlFor="description">
            Descrição:
            <textarea
              id="description"
              onChange={ ({ target }) => this.setState({ description: target.value }) }
            >
              ...
            </textarea>
          </label>
          <button type="submit">Adicionar Despesa</button>
        </form>
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
