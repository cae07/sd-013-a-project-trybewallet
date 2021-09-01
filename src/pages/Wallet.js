import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { API_RESPONSE } from '../actions';
// import SelectOptions from '../SelectOptions';

const paymentOptions = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
const tagOptions = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    const { user, wallet } = this.props;
    this.state = {
      user,
      wallet,
      coinCurrent: 'USD',
      payment: 'Dinheiro',
      destinedTo: 'Alimentação',
      value: '',
      description: '',
    };

    this.tagOptions = this.tagOptions.bind(this);
    this.paymentOptions = this.paymentOptions.bind(this);
    this.coinsOptions = this.coinsOptions.bind(this);
    this.totalExpenses = this.totalExpenses.bind(this);
    // this.onClick = this.onClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const { APIResponse } = this.props;
    fetch('https://economia.awesomeapi.com.br/json/all')
      .then((data) => data.json())
      .then((response) => APIResponse(response));
  }

  coinsOptions() {
    const { wallet: { currencies } } = this.props;
    const { coinCurrent } = this.state;

    return (

      <label htmlFor="Moeda">
        Moeda:
        <select
          id="Moeda"
          name="coinCurrent"
          onChange={ this.handleChange }
          value={ coinCurrent }
        >
          {Object.keys(currencies)
            .filter((currencie) => currencie !== 'USDT')
            .map((currencie) => (
              <option
                name="coinCurrent"
                key={ currencie }
                value={ currencie }
              >
                {currencie}

              </option>))}
        </select>

      </label>
    );
  }

  paymentOptions() {
    const { payment } = this.state;

    return (
      <label htmlFor="paymentOptions">
        Método de pagamento:
        <select
          name="payment"
          id="paymentOptions"
          onChange={ this.handleChange }
          value={ payment }
        >
          {paymentOptions.map((paymentOption) => (
            <option key={ paymentOption } value={ paymentOption }>
              {paymentOption}
            </option>))}
        </select>
      </label>
    );
  }

  totalExpenses() {
    const returnDefault = (
      <p className="despezas" data-testid="total-field">
        Despesa Total: R$ 0
      </p>
    );

    const { wallet: { expenses } } = this.state;
    if (expenses.length === 0) return returnDefault;
    return (
      <p className="despezas" data-testid="total-field">
        Despesa Total: R$
        {' '}
        {
          expenses.reduce((acc, cur) => {
            acc += cur.custo;
            return acc;
          }, 0)
        }
      </p>
    );
  }

  tagOptions() {
    const { destinedTo } = this.state;
    return (
      <label htmlFor="tagOptions">
        Tag:
        <select
          name="destinedTo"
          id="tagOptions"
          onChange={ this.handleChange }
          value={ destinedTo }
        >
          {tagOptions.map((tag) => (
            <option key={ tag } value={ tag }>
              {tag}
            </option>))}
        </select>
      </label>
    );
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
    console.log(e.target);
  }

  render() {
    const { user, coinCurrent, value, description } = this.state;
    return (
      <div>
        <header>
          Trybe Wallet
        </header>
        <p data-testid="email-field">{user.email}</p>
        {this.totalExpenses()}
        <p data-testid="header-currency-field">
          {' '}
          {coinCurrent}
          {' '}
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
        </form>

      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  APIResponse: (payload) => (dispatch(API_RESPONSE(payload))),
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
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
