import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import HeaderForm from '../components/HeaderForm';
import { fetchCurrencesAction, fetchExchangeRatesAction } from '../actions';

class Wallet extends React.Component {
  constructor() {
    super();

    this.state = {
      expensesValue: 0,
      expenses: {
        id: 0,
        currency: 'USD',
        value: 0,
        description: '',
        paymentMethod: 'Dinheiro',
        kindExpense: 'Alimentação',
      },
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.expenseTotal = this.expenseTotal.bind(this);
  }

  componentDidMount() {
    const { fetchCurrences } = this.props;
    fetchCurrences();
  }

  handleChange({ target: { value, name } }) {
    return this.setState((prevState) => ({
      expenses: {
        ...prevState.expenses,
        [name]: value,
      },
    }));
  }

  expenseTotal(currencyAsk) {
    const { expenses: { value } } = this.state;
    const expenseRate = value * currencyAsk;
    this.setState((prevState) => (
      { expensesValue: prevState.expensesValue + expenseRate }));
  }

  async submitForm() {
    const { fetchExchangeRates } = this.props;
    const { expenses, expenses: { currency } } = this.state;
    this.setState((prevState) => ({
      expenses:
      { ...prevState.expenses,
        id: prevState.expenses.id + 1 } }));
    const currenciesAsk = await fetchExchangeRates(expenses, currency);
    this.expenseTotal(Number(currenciesAsk));
  }

  render() {
    const { email } = this.props;
    const { expensesValue, expenses } = this.state;
    return (
      <header>
        <span data-testid="email-field">
          Olá,
          {email}
        </span>
        <span data-testid="total-field">
          { expensesValue }
        </span>
        <span data-testid="header-currency-field">
          BRL
        </span>
        <HeaderForm
          expenses={ expenses }
          handleChange={ this.handleChange }
          submitForm={ this.submitForm }
        />
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  currencies: state.wallet.currencies,
  isFetching: state.isFetching,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCurrences: () => dispatch(fetchCurrencesAction()),
  fetchExchangeRates: (expenses, currency) => (
    dispatch(fetchExchangeRatesAction(expenses, currency))),
});

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  fetchCurrences: PropTypes.func.isRequired,
  fetchExchangeRates: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
