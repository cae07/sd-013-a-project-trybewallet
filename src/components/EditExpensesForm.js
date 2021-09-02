import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import InputText from './InputText';
import SelectCurrency from './SelectCurrency';
import SelectInput from './SelectInput';
import { payMethodOptions, expenseCategoryOptions } from '../data';
import fetchAPI from '../services/api';
import { editExpenseSuccessful, saveCurrenciesInfo } from '../actions';

class ExpensesForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      description: '',
      currency: 'USD',
      paymentMethod: 'Dinheiro',
      expenseCategory: 'Alimentação',
      isLoadingCoins: false,
      currencies: [],
      errorFetchCoins: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.fetchCoins = this.fetchCoins.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.getEditExpense = this.getEditExpense.bind(this);
  }

  componentDidMount() {
    this.fetchCoins();
    this.getEditExpense();
  }

  getEditExpense() {
    const { editableExpense: { value, description, currency, method, tag } } = this.props;

    this.setState({
      value,
      description,
      currency,
      paymentMethod: method,
      expenseCategory: tag,
    });
  }

  async fetchCoins() {
    const { saveCurrenciesInRedux } = this.props;

    this.setState({
      isLoadingCoins: true,
    });
    try {
      const response = await fetchAPI();
      const data = await Object.entries(response);
      const currencies = data.filter((([name]) => name !== 'USDT' && name !== 'DOGE'))
        .map(([name]) => name);

      this.setState({
        isLoadingCoins: false,
        currencies,
      });
      saveCurrenciesInRedux(currencies);
    } catch (error) {
      this.setState({
        errorFetchCoins: true,
        isLoadingCoins: false,
      });
    }
  }

  handleClick() {
    const {
      editableExpense: { id, exchangeRates }, expenses, updateTheExpenses,
    } = this.props;
    const { value, description, currency, paymentMethod, expenseCategory } = this.state;

    const expensesWithoutEditableExpense = expenses
      .filter((expense) => expense.id !== id);
    const editedExpense = {
      id,
      value,
      description,
      currency,
      method: paymentMethod,
      tag: expenseCategory,
      exchangeRates,
    };
    const updatedExpenses = [...expensesWithoutEditableExpense, editedExpense]
      .sort((a, b) => a.id - b.id);

    updateTheExpenses(updatedExpenses);
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { value, description, currency, paymentMethod, expenseCategory,
      currencies, errorFetchCoins, isLoadingCoins } = this.state;
    return (
      <section>
        <form action="">
          <InputText
            name="value"
            value={ value }
            changeEvent={ this.handleChange }
            labelValue="Valor"
          />
          <InputText
            name="description"
            value={ description }
            changeEvent={ this.handleChange }
            labelValue="Descrição"
          />
          <SelectCurrency
            value={ currency }
            options={ currencies }
            isLoading={ isLoadingCoins }
            errorFetch={ errorFetchCoins }
            changeEvent={ this.handleChange }
          />
          <SelectInput
            name="paymentMethod"
            value={ paymentMethod }
            options={ payMethodOptions }
            labelValue="Método de pagamento"
            changeEvent={ this.handleChange }
          />
          <SelectInput
            name="expenseCategory"
            value={ expenseCategory }
            options={ expenseCategoryOptions }
            labelValue="Tag"
            changeEvent={ this.handleChange }
          />
          <button
            onClick={ this.handleClick }
            type="button"
          >
            Editar despesa
          </button>
        </form>
      </section>
    );
  }
}

ExpensesForm.propTypes = {
  saveCurrenciesInRedux: PropTypes.func.isRequired,
  updateTheExpenses: PropTypes.func.isRequired,
  editableExpense: PropTypes.shape({
    id: PropTypes.number,
    value: PropTypes.string,
    description: PropTypes.string,
    currency: PropTypes.string,
    method: PropTypes.string,
    tag: PropTypes.string,
    exchangeRates: PropTypes.objectOf(PropTypes.string),
  }).isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
  editableExpense: state.wallet.expenseToEdit,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  saveCurrenciesInRedux: (payload) => dispatch(saveCurrenciesInfo(payload)),
  updateTheExpenses: (payload) => dispatch(editExpenseSuccessful(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesForm);
