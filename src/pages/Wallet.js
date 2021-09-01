import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addSpent, getCoin } from '../actions';
import WalletInput from '../components/WalletInput';
import WalletSelect from '../components/WalletSelect';

class Wallet extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      expenses: {
        value: '',
        description: '',
        currency: 'USD',
        method: 'dinheiro',
        tag: 'Alimentação',
      },
      addButton: true,
    };

    this.renderHeader = this.renderHeader.bind(this);
    this.renderForms = this.renderForms.bind(this);
    this.getCoinOptions = this.getCoinOptions.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleExpenses = this.handleExpenses.bind(this);
    this.checkInputs = this.checkInputs.bind(this);
  }

  componentDidMount() {
    this.getCoinOptions();
  }

  componentDidUpdate() {
    this.totalExpenses();
  }

  getCoinOptions() {
    const { fetchCoin } = this.props;
    fetchCoin();
  }

  handleExpenses() {
    const { dispatchSpent } = this.props;
    const { expenses } = this.state;

    const initialState = {
      value: '',
      description: '',
      currency: 'USD',
      method: 'dinheiro',
      tag: 'Alimentação',
    };

    dispatchSpent(expenses);
    this.setState({ expenses: initialState });
  }

  checkInputs() {
    const { expenses: { value, description } } = this.state;
    return value && description
      ? this.setState({ addButton: false }) : this.setState({ addButton });
  }

  handleChange({ target }) {
    const { expenses } = this.state;
    const { id, value } = target;
    this.setState({ expenses: {
      ...expenses,
      [id]: value,
    } });
    this.checkInputs();
  }

  totalExpenses() {
    const { expenses } = this.props;
    return expenses.reduce((itemAcc, item) => {
      const convertedValue = item.exchangeRates[item.currency].ask;
      itemAcc += item.value * convertedValue;
      return itemAcc;
    }, 0).toFixed(2);
  }

  renderHeader() {
    const { email } = this.props;
    return (
      <header>
        <span data-testid="email-field">
          {email}
        </span>
        <span data-testid="total-field">
          {this.totalExpenses()}
        </span>
        <span data-testid="header-currency-field">
          BRL
        </span>
      </header>
    );
  }

  renderForms() {
    const { currencies } = this.props;
    const { expenses } = this.state;
    return (
      <form>
        <WalletInput
          value={ expenses.value }
          labelText="Valor:"
          id="value"
          onChange={ this.handleChange }
        />
        <WalletInput
          value={ expenses.description }
          labelText="Descrição:"
          id="description"
          onChange={ this.handleChange }
        />
        <WalletSelect
          labelText="Moeda:"
          id="currency"
          ariaLabel="moeda"
          onChange={ this.handleChange }
          currencies={ currencies }
        />
        <label htmlFor="method">
          Método de pagamento:
          <select
            aria-label="método de pagamento"
            id="payment-method"
            onChange="method"
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag:
          <select name="tag" id="tag" onChange={ this.handleChange }>
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
    const { addButton } = this.state;
    return (
      <>
        {this.renderHeader()}
        {this.renderForms()}
        <button
          onClick={ this.handleExpenses }
          type="button"
          disabled={ addButton }
        >
          Adicionar despesa
        </button>
      </>
    );
  }
}

const mapState = ({ user, wallet }) => ({
  email: user.email,
  currencies: wallet.currencies,
  expenses: wallet.expenses,
});

const mapDispatch = (dispatch) => ({
  fetchCoin: () => dispatch(getCoin()),
  dispatchSpent: (payload) => dispatch(addSpent(payload)),
});

Wallet.propTypes = {
  email: PropTypes.string,
  fetchCoin: PropTypes.func,
}.isRequired;

export default connect(mapState, mapDispatch)(Wallet);
