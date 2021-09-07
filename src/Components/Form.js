import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ConnectedInputSelect } from './InputSelect';
import { InputText } from './InputText';
import { saveCurrencies, saveExpense } from '../actions/index';
import Button from './Button';

class Form extends React.Component {
  constructor() {
    super();
    this.fetchApi = this.fetchApi.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.saveExpense = this.saveExpense.bind(this);

    this.state = { expense: {} };
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

  async fetchApi() {
    const api = await fetch('https://economia.awesomeapi.com.br/json/all');
    const json = await api.json();
    const allCurrencie = Object.keys(json);
    const currenciesWithoutUsdt = allCurrencie.filter((currency) => currency !== 'USDT');
    const { saveCurrenciesOnGlobalState } = this.props;

    saveCurrenciesOnGlobalState(currenciesWithoutUsdt);
  }

  saveExpense() {
    const { expense } = this.state;
    const { saveExpenseOnGlobalState, expenses } = this.props;
    saveExpenseOnGlobalState({ ...expense, id: expenses.length });
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
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
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
