import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { fetchCoin, fetchCoinAtual } from '../actions';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      value: 0,
      description: '',
      currency: 'BRL',
      method: '',
      tag: '',
    };
    this.renderHeader = this.renderHeader.bind(this);
    this.renderForm = this.renderForm.bind(this);
    this.change = this.change.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.sumExpenses = this.sumExpenses.bind(this);
  }

  componentDidMount() {
    const { fetchMoedas } = this.props;
    fetchMoedas();
  }

  change({ target }) {
    const { id, value } = target;
    this.setState({ [id]: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { id, value, description, currency, method, tag } = this.state;
    const estado = { id, value, description, currency, method, tag };
    const { fetchMoedasAtual } = this.props;
    this.setState({ id: id + 1 }, () => fetchMoedasAtual(estado));
  }

  sumExpenses() {
    let soma = 0;
    const { expenses } = this.props;
    expenses.forEach(({ value, currency, exchangeRates }) => {
      if (exchangeRates[currency].ask) {
        soma += (parseFloat(value) * parseFloat(exchangeRates[currency].ask));
        return soma;
      }
      return soma;
    });
    return soma.toFixed(2);
  }

  renderHeader() {
    const { emailInput } = this.props;
    const { currency } = this.state;
    return (
      <header>
        <section data-testid="email-field">{emailInput}</section>
        <section data-testid="total-field">{this.sumExpenses()}</section>
        <section data-testid="header-currency-field">{currency}</section>
      </header>
    );
  }

  renderForm() {
    const { moedas } = this.props;
    const {
      value,
      description,
      currency,
      method,
      tag } = this.state;

    return (
      <form onSubmit={ this.handleSubmit }>
        <label htmlFor="value">
          Valor
          <input type="number" onChange={ this.change } id="value" value={ value } />
        </label>
        <label htmlFor="description">
          Descrição
          <input onChange={ this.change } id="description" value={ description } />
        </label>
        <label htmlFor="currency">
          Moeda
          <select onChange={ this.change } id="currency" value={ currency }>
            {moedas.map((m) => <option key={ m }>{m}</option>)}
          </select>
        </label>
        <label htmlFor="method">
          Método de pagamento
          <select onChange={ this.change } id="method" value={ method }>
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select onChange={ this.change } id="tag" value={ tag }>
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
        <button type="submit">Adicionar despesa</button>
      </form>
    );
  }

  render() {
    return (
      <main>
        {this.renderHeader()}
        <section>
          {this.renderForm()}
        </section>
      </main>
    );
  }
}

const mapStateToProps = (state) => ({
  emailInput: state.user.email,
  moedas: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  fetchMoedas: () => dispatch(fetchCoin()),
  fetchMoedasAtual: (estado) => dispatch(fetchCoinAtual(estado)),
});

Wallet.propTypes = {
  emailInput: PropTypes.string.isRequired,
  fetchMoedas: PropTypes.func,
  moedas: PropTypes.arrayOf(),
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
