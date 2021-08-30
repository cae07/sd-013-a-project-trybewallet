import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCoins } from '../actions';

class Wallet extends React.Component {
  constructor(props) {
    super(props);

    this.renderHeader = this.renderHeader.bind(this);
    this.renderForms = this.renderForms.bind(this);
    this.getCoinsOptions = this.getCoinsOptions.bind(this);
  }

  componentDidMount() {
    this.getCoinsOptions();
  }

  getCoinsOptions() {
    const { fetchCoins } = this.props;
    fetchCoins();
  }

  renderHeader() {
    const { email } = this.props;
    return (
      <header>
        <span
          data-testid="email-field"
        >
          {email}
        </span>
        <span
          data-testid="total-field"
        >
          0
        </span>
        <span
          data-testid="header-currency-field"
        >
          BRL
        </span>
      </header>
    );
  }

  renderForms() {
    const { currencies } = this.props;
    return (
      <form>
        <label htmlFor="amount">
          Valor:
          <input id="amount" type="text" />
        </label>
        <label htmlFor="description">
          Descrição:
          <input id="description" type="text" />
        </label>
        <label htmlFor="coins">
          Moeda:
          <select aria-label="moeda" id="coins">
            {Object.keys(currencies)
              .map((coin) => <option key={ coin } value={ coin }>{coin}</option>)}
          </select>
        </label>
        <label htmlFor="payment-method">
          Método de pagamento:
          <select aria-label="método de pagamento" id="payment-method">
            <option value="dinheiro">Dinheiro</option>
            <option value="cartão de crédito">Cartão de crédito</option>
            <option value="cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag:
          <select name="tag" id="tag">
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
      </form>
    );
  }

  render() {
    return (
      <>
        {this.renderHeader()}
        {this.renderForms()}
      </>);
  }
}

const mapStateToProps = ({ user, wallet }) => ({
  email: user.email,
  currencies: wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCoins: () => dispatch(getCoins()),
});

Wallet.propTypes = {
  email: PropTypes.string,
  fetchCoins: PropTypes.func,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
