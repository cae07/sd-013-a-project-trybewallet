import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import InputText from './InputText';
import SelectCurrency from './SelectCurrency';
import SelectInput from './SelectInput';
import { payMethodOptions, expenseCategoryOptions } from '../data';
import fetchAPI from '../services/api';
import { requestAPISuccessful, saveCurrenciesInfo } from '../actions';

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
  }

  componentDidMount() {
    this.fetchCoins();
  }

  async fetchCoins() {
    const { saveCurrenciesInRedux } = this.props;

    this.setState({
      isLoadingCoins: true,
    });
    try {
      const response = await fetchAPI();
      const data = await Object.entries(response);
      const currencies = data.map(([name]) => name);

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

  async handleClick() {
    const {
      value, description, currency,
      paymentMethod, expenseCategory,
    } = this.state;

    const { saveExpensesInRedux, expenses, id } = this.props;
    // const id = expenses.length;
    console.log(id);

    const data = await fetchAPI();

    const payload = {
      id,
      value,
      description,
      currency,
      method: paymentMethod,
      tag: expenseCategory,
      exchangeRates: data,
    };

    saveExpensesInRedux(payload);
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
          <button onClick={ this.handleClick } type="button">Adicionar despesa</button>
        </form>
      </section>
    );
  }
}

ExpensesForm.propTypes = {
  saveCurrenciesInRedux: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
  id: state.wallet.idNewItem,
});

const mapDispatchToProps = (dispatch) => ({
  saveCurrenciesInRedux: (payload) => dispatch(saveCurrenciesInfo(payload)),
  saveExpensesInRedux: (payload) => dispatch(requestAPISuccessful(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesForm);
