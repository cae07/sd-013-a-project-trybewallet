import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { putCoins } from '../actions';
// import SelectOptions from '../SelectOptions';

const paymentOptions = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
const tagOptions = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    const { wallet, user } = this.props;
    this.state = { wallet, user };

    this.tagOptions = this.tagOptions.bind(this);
    this.paymentOptions = this.paymentOptions.bind(this);
    this.coinsOptions = this.coinsOptions.bind(this);
    this.totalExpenses = this.totalExpenses.bind(this);
    // this.onClick = this.onClick.bind(this);
    // this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const { pushCoins } = this.props;
    fetch('https://economia.awesomeapi.com.br/json/all')
      .then((data) => data.json())
      .then((response) => pushCoins(Object.keys(response)));
  }

  coinsOptions() {
    const { wallet: { currencies } } = this.props;
    return (
      <label htmlFor="Moeda">
        Moeda:
        <select id="Moeda" name="Moeda">
          {currencies
            .filter((currencie) => currencie !== 'USDT')
            .map((currencie) => (
              <option key={ currencie } value={ currencie }>{currencie}</option>))}
        </select>
      </label>
    );
  }

  paymentOptions() {
    return (
      <label htmlFor="paymentOptions">
        Método de pagamento:
        <select name="paymentOptions" id="paymentOptions">
          {paymentOptions.map((payment) => (
            <option key={ payment } value={ payment }>
              {payment}
            </option>))}
        </select>
      </label>
    );
  }

  totalExpenses() {
    const { wallet: { expenses } } = this.state;
    return (
      <p className="despezas" data-testid="total-field">
        Despesa Total: R$
        {' '}
        { expenses.reduce((acc, cur) => {
          acc += cur;
          return acc;
        }, 0) }
      </p>
    );
  }

  tagOptions() {
    return (
      <label htmlFor="tagOptions">
        Tag:
        <select name="tagOptions" id="tagOptions">
          {tagOptions.map((tag) => (
            <option key={ tag } value={ tag }>
              {tag}
            </option>))}
        </select>
      </label>
    );
  }

  render() {
    const { user } = this.state;
    return (
      <div>
        <header>
          Trybe Wallet
        </header>
        <p data-testid="email-field">{user.email}</p>
        {this.totalExpenses()}
        <p data-testid="header-currency-field"> BRL </p>

        {/* FORMULÁRIO DE DESPESAS ABAIXO */}

        <form>
          <label htmlFor="Form-Despesas-Valor">
            Valor:
            <input type="text" name="Valor" id="Form-Despesas-Valor" />
          </label>

          <label htmlFor="Form-Despesas-Descrição">
            Descrição:
            <input type="text" name="Descrição" id="Form-Despesas-Descrição" />
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
  pushCoins: (state) => (dispatch(putCoins(state))),
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
  pushCoins: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
