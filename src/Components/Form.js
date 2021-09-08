import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ConnectedInputSelect } from './InputSelect';
import { InputText } from './InputText';
import { saveCurrencies, saveExpense, fetchCurrenciesThunk } from '../actions/index';
import Button from './Button';

class Form extends React.Component {
  constructor() {
    super();
    this.fetchApi = this.fetchApi.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.saveExpense = this.saveExpense.bind(this);

    this.state = { expense: {
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    } };
  }

  componentDidMount() {
    this.fetchApi();
  }

  handleChange({ target }) {
    const { name, value } = target;

    this.setState((oldState = {}) => ({
      expense: {
        ...oldState.expense,
        [name]: value,
      },
    }));
  }

  async fetchExchangeRates() {
    const api = await fetch('https://economia.awesomeapi.com.br/json/all');
    const json = await api.json();

    return json;
  }

  async fetchApi() {
    const exchangeRates = await this.fetchExchangeRates();
    const allCurrencie = Object.keys(exchangeRates);
    const currenciesWithoutUsdt = allCurrencie.filter((currency) => currency !== 'USDT');
    const { saveCurrenciesOnGlobalState } = this.props;

    saveCurrenciesOnGlobalState(currenciesWithoutUsdt);
  }

  async saveExpense() {
    const { expense } = this.state;
    const {
      saveExpenseOnGlobalState,
      expenses,
    } = this.props;

    const exchangeRates = await this.fetchExchangeRates();

    saveExpenseOnGlobalState({ ...expense, id: expenses.length, exchangeRates });
  }

  render() {
    return (
      <form>
        <InputText onChange={ this.handleChange } />
        <ConnectedInputSelect
          onChange={ this.handleChange }
        />
        <Button onClick={ this.saveExpense } />
      </form>
    );
  }
}

Form.propTypes = {
  saveCurrenciesOnGlobalState: PropTypes.func.isRequired,
  saveExpenseOnGlobalState: PropTypes.func.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  exchangeRates: PropTypes.shape({
    ask: PropTypes.string.isRequired,
    bid: PropTypes.string.isRequired,
    code: PropTypes.string.isRequired,
    codein: PropTypes.string.isRequired,
    create_date: PropTypes.string.isRequired,
    high: PropTypes.string.isRequired,
    low: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    pctChange: PropTypes.string.isRequired,
    timestamp: PropTypes.string.isRequired,
    varBid: PropTypes.string.isRequired,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
  exchangeRates: state.wallet.exchangeRates,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCurrenciesFromApi: () => dispatch(fetchCurrenciesThunk()),
  saveCurrenciesOnGlobalState: (currencies) => {
    // saveEmail vai retornar um objeto com { type: BLA, payload: { email }}
    const actionWithCurrencies = saveCurrencies(currencies);

    // a gente DISPARA esse objeto para o redux
    dispatch(actionWithCurrencies);
  },
  saveExpenseOnGlobalState: (expense) => {
    const actionWithExpense = saveExpense(expense);

    dispatch(actionWithExpense);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
