import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { API_RESPONSE, addExpenses } from '../actions';
import ListExpenses from '../componentes/ListExpenses';

const paymentOptions = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
const tagOptions = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    const { user } = this.props;
    this.state = {
      user,
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      value: '',
      description: '',
    };
    this.tagOptions = this.tagOptions.bind(this);
    this.onClickBtn = this.onClickBtn.bind(this);
    this.paymentOptions = this.paymentOptions.bind(this);
    this.coinsOptions = this.coinsOptions.bind(this);
    this.fetchAPI = this.fetchAPI.bind(this);
    this.totalExpenses = this.totalExpenses.bind(this);
    this.buttonSubmit = this.buttonSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const { APIResponse } = this.props;
    fetch('https://economia.awesomeapi.com.br/json/all')
      .then((data) => data.json())
      .then((response) => APIResponse(response));
  }

  async onClickBtn() {
    const { currency, method, tag, value, description } = this.state;
    const { wallet: { expenses }, dispatchDados } = this.props;
    const id = expenses.length;

    const valorMoedas = await this.fetchAPI();

    const dados = { id,
      value,
      description,
      currency,
      method,
      tag,
      exchangeRates: valorMoedas };

    return dispatchDados(dados);
  }

  fetchAPI() {
    return fetch('https://economia.awesomeapi.com.br/json/all')
      .then((data) => data.json())
      .then((response) => (response));
  }

  buttonSubmit() {
    return (
      <button
      // onClick={ dispatchDados(dados) }
        onClick={ this.onClickBtn }
        type="button"
      >
        ENVIAR
      </button>
    );
  }

  totalExpenses() {
    const returnDefault = (
      <p className="despezas" data-testid="total-field">
        Despesa Total: R$ 0
      </p>
    );

    const { wallet: { expenses } } = this.props;
    if (expenses.length === 0) return returnDefault;
    return (
      <p className="despezas" data-testid="total-field">
        Despesa Total: R$
        {' '}
        {
          expenses.reduce((acc, cur) => {
            acc += parseInt(cur.value, 10);
            return acc;
          }, 0)
        }
      </p>
    );
  }

  tagOptions() {
    const { tag } = this.state;
    return (
      <label htmlFor="tagOptions">
        Tag:
        <select
          name="tag"
          id="tagOptions"
          onChange={ this.handleChange }
          value={ tag }
        >
          {tagOptions.map((option) => (
            <option key={ option } value={ option }>
              {option}
            </option>))}
        </select>
      </label>
    );
  }

  paymentOptions() {
    const { method } = this.state;

    return (
      <label htmlFor="paymentOptions">
        Método de pagamento:
        <select
          name="method"
          id="paymentOptions"
          onChange={ this.handleChange }
          value={ method }
        >
          {paymentOptions.map((paymentOption) => (
            <option key={ paymentOption } value={ paymentOption }>
              {paymentOption}
            </option>))}
        </select>
      </label>
    );
  }

  coinsOptions() {
    const { wallet: { currencies } } = this.props;
    const { currency } = this.state;

    return (

      <label htmlFor="Moeda">
        Moeda:
        <select
          id="Moeda"
          name="currency"
          onChange={ this.handleChange }
          value={ currency }
        >
          { currencies
            .filter((currencie) => currencie !== 'USDT')
            .map((currencie) => (
              <option
                name="currency"
                key={ currencie }
                value={ currencie }
              >
                {currencie}

              </option>))}
        </select>

      </label>
    );
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    const { user, value, description } = this.state;
    return (
      <div>
        <header>
          Trybe Wallet
        </header>
        <p data-testid="email-field">{user.email}</p>
        {this.totalExpenses()}
        <p data-testid="header-currency-field">
          BRL
        </p>

        {/* FORMULÁRIO DE DESPESAS ABAIXO */}

        <form>
          <label htmlFor="Form-Despesas-Valor">
            Valor:
            <input
              value={ value }
              onChange={ this.handleChange }
              type="text"
              name="value"
              id="Form-Despesas-Valor"
            />
          </label>

          <label htmlFor="Form-Despesas-Descrição">
            Descrição:
            <input
              value={ description }
              onChange={ this.handleChange }
              type="text"
              name="description"
              id="Form-Despesas-Descrição"
            />
          </label>
          {this.coinsOptions()}
          {this.paymentOptions()}
          {this.tagOptions()}
          {this.buttonSubmit()}

        </form>
        <ListExpenses />

      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  APIResponse: (payload) => (dispatch(API_RESPONSE(payload))),
  dispatchDados: (payload) => (dispatch(addExpenses(payload))),
});

const mapStateToProps = (state) => ({
  user: state.user,
  wallet: state.wallet,
});

Wallet.propTypes = {
  wallet: PropTypes.shape({
    currencies: PropTypes.arrayOf(PropTypes.number),
    expenses: PropTypes.arrayOf(PropTypes.number),
  }).isRequired,
  user: PropTypes.shape({
    email: PropTypes.string,
    password: PropTypes.string,
  }).isRequired,
  APIResponse: PropTypes.func.isRequired,
  dispatchDados: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
