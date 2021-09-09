import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { setExpenses } from '../actions';
import Expenses from './Expenses';
import Header from './Header';

class Wallet extends React.Component {
  constructor() {
    super();

    this.state = {
      currency: '',
      description: '',
      exchangeRates: '',
      id: 0,
      method: '',
      tag: '',
      value: '',
    };
    this.fetchMoeda();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.change = this.change.bind(this);
  }

  change({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  async handleSubmit(event) {
    event.preventDefault();
    const { expenses, dispatchSetValue } = this.props;
    const moedas = fetch('https://economia.awesomeapi.com.br/json/all');
    const response = await moedas;
    this.setState({
      id: expenses.length,
      exchangeRates: await response.json(),
    });

    dispatchSetValue(this.state);
  }

  adcionaMoedas() {
    const selectMoedas = document.querySelector('#moedas');
    const { exchangeRates } = this.state;
    Object.keys(exchangeRates).forEach((moeda, i) => {
      if (moeda !== 'USDT') {
        const novaOpcao = document.createElement('option');
        novaOpcao.value = moeda;
        novaOpcao.textContent = moeda;
        novaOpcao.id = i;
        selectMoedas.appendChild(novaOpcao);
      }
    });
  }

  async fetchMoeda() {
    const moedas = fetch('https://economia.awesomeapi.com.br/json/all');
    const response = await moedas;
    this.setState({ exchangeRates: await response.json() });
    this.adcionaMoedas();
  }

  render() {
    return (
      <>
        <form onSubmit={ this.handleSubmit }>
          <Header />
          <label htmlFor="valor">
            Valor
            <input name="value" id="valor" type="number" onChange={ this.change } />
          </label>
          <label htmlFor="moedas">
            Moeda
            <select name="currency" id="moedas" onChange={ this.change }> </select>
          </label>
          <label htmlFor="pagamento">
            Método de pagamento
            <select
              id="pagamento"
              name="method"
              onChange={ this.change }
            >
              <option value="Dinheiro">Dinheiro</option>
              <option value="Cartão de crédito">Cartão de crédito</option>
              <option value="Cartão de débito">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag">
            Tag
            <select name="tag" id="tag" onChange={ this.change }>
              <option value="Alimentação">Alimentação</option>
              <option value="Lazer">Lazer</option>
              <option value="Trabalho">Trabalho</option>
              <option value="Transporte">Transporte</option>
              <option value="Saúde">Saúde</option>
            </select>
          </label>
          <label htmlFor="descricao">
            Descrição
            <textarea name="description" id="descricao" onChange={ this.change } />
          </label>
          <button type="submit"> Adicionar Despesa </button>
        </form>
        <Expenses />
      </>
    );
  }
}

Wallet.propTypes = {
  email: PropTypes.string,
  setExpenses: PropTypes.func,
  expenses: PropTypes.arrayOf(),
}.isRequired;

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});
const mapDispatchToProps = (dispath) => ({
  dispatchSetValue: (stateExpense) => dispath(setExpenses(stateExpense)) });

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
