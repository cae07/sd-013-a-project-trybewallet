import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import trybeLogo from '../images/trybeLogo.png';
import { getExpense, addExpense } from '../actions/index';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const { actionAPIcoins } = this.props;
    actionAPIcoins();
  }

  newState() {
    this.setState({
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    });
  }

  handleOnChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  handleClick() {
    const { acticonExpenseAPI } = this.props;
    const { id, value, description, currency, method, tag } = this.state;
    const state = { id, value, description, currency, method, tag };
    this.setState({
      id: id + 1,
    }, () => acticonExpenseAPI(state));
    this.newState();
  }

  sumValues() {
    const { expenses } = this.props;
    let sum = 0;
    expenses.forEach(({ value, currency, exchangeRates }) => {
      sum += value * exchangeRates[currency].ask;
    });
    return sum.toFixed(2);
  }

  inputValue() {
    const { value } = this.state;
    return (
      <label htmlFor="value">
        Valor:
        <input
          value={ value }
          id="value"
          name="value"
          onChange={ this.handleOnChange }
          className="valueMoeda"
          type="number"
        />
      </label>
    );
  }

  inputDescription() {
    const { description } = this.state;
    return (
      <label htmlFor="description">
        Descrição da despesa:
        <input
          value={ description }
          id="description"
          onChange={ this.handleOnChange }
          name="description"
          type="text"
        />
      </label>
    );
  }

  inputSelect() {
    const { currency } = this.state;
    const { currenceCoin } = this.props;
    return (
      <label htmlFor="currency">
        Moeda:
        <select
          value={ currency }
          onChange={ this.handleOnChange }
          className="valueMoeda"
          name="currency"
          id="currency"
        >
          {currenceCoin
            .map((moeda) => (<option className="moeda" key={ moeda }>{ moeda }</option>))}
        </select>
      </label>
    );
  }

  inputSelectPaymentMethod() {
    const { method } = this.state;
    return (
      <label htmlFor="method">
        Método de pagamento:
        <select
          id="method"
          value={ method }
          onChange={ this.handleOnChange }
          name="method"
        >
          <option>Dinheiro</option>
          <option>Cartão de crédito</option>
          <option>Cartão de débito</option>
        </select>
      </label>
    );
  }

  inputSelectDespesa() {
    const { tag } = this.state;
    return (
      <label htmlFor="despesa">
        Tag:
        <select
          id="despesa"
          value={ tag }
          onChange={ this.handleOnChange }
          name="tag"
        >
          <option>Alimentação</option>
          <option>Lazer</option>
          <option>Trabalho</option>
          <option>Transporte</option>
          <option>Saúde</option>
        </select>
      </label>
    );
  }

  render() {
    const { email } = this.props;
    return (
      <div>
        <header className="header-wallet-contain">
          <div className="header-wallet">
            <img src={ trybeLogo } alt="trybeLogo" width="150px" height="40px" />
            <div className="wallet-email">
              <p data-testid="email-field" className="email">
                { `Email: ${email}` }
              </p>
              <p data-testid="total-field">
                {`Despesa total: ${this.sumValues()}`}
              </p>
              <p data-testid="header-currency-field">BRL</p>
            </div>
          </div>
        </header>
        <form className="contain-forms-wallet">
          {this.inputValue()}
          {this.inputSelect()}
          {this.inputSelectPaymentMethod()}
          {this.inputSelectDespesa()}
          {this.inputDescription()}
          <button
            type="button"
            onClick={ () => this.handleClick() }
          >
            Adicionar despesa
          </button>
        </form>
      </div>
    );
  }
}

Wallet.propTypes = {
  email: PropTypes.string,
  actionAPIcoins: PropTypes.func,
  currenceCoin: PropTypes.arrayOf(),
}.isRequired;

const mapStateToProps = (state) => ({
  email: state.user.email,
  currenceCoin: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  actionAPIcoins: () => dispatch(getExpense()),
  acticonExpenseAPI: (state) => dispatch(addExpense(state)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
