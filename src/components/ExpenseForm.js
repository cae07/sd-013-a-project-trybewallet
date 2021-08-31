// React
import React, { Component } from 'react';

// PropTypes
import PropTypes from 'prop-types';

// Redux
import { connect } from 'react-redux';
import {
  setCurrencies,
  saveExpense,
  fetchExchangeRates,
} from '../actions';

// Children
import CurrencySelect from './CurrencySelect';
import MethodSelect from './MethodSelect';
import TagSelect from './TagSelect';

// Formulário de adição de Despesa
class ExpenseForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };

    this.fetchCurrencies = this.fetchCurrencies.bind(this);
    this.createNewExpense = this.createNewExpense.bind(this);
    this.saveExpense = this.saveExpense.bind(this);
  }

  componentDidMount() {
    this.fetchCurrencies();
  }

  fetchCurrencies() {
    const { props: { setCurrenciesDispatcher } } = this;
    fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json())
      .then((data) => {
        delete data.USDT;
        setCurrenciesDispatcher({
          currencies: Object.keys(data),
        });
      });
  }

  createNewExpense({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  async saveExpense() {
    const {
      props: {
        saveExpenseDispatcher,
        fetchExchangeRatesDispatcher,
      },
    } = this;

    await fetchExchangeRatesDispatcher();
    /*
      Toda vez que uma nova despesa for salva no estado, um fetch retornará
      um objeto com as taxas de câmbio, e salvará essa informação dentro da chave
      "exchangeRates" da despesa criada abaixo
    */
    saveExpenseDispatcher(this.state);
  }

  render() {
    const { state: { value, description, currency, method, tag } } = this;
    return (
      <form className="ExpenseForm">
        <fieldset>
          <legend>Despesa</legend>
          <label htmlFor="expense-amount">
            Valor
            <input
              id="expense-amount"
              type="text"
              name="value"
              defaultValue={ value }
              placeholder="Valor"
              onChange={ (evt) => this.createNewExpense(evt) }
            />
          </label>
          <label htmlFor="expense-description">
            Descrição
            <textarea
              id="expense-description"
              name="description"
              defaultValue={ description }
              placeholder="Descreva a sua despesa..."
              onChange={ (evt) => this.createNewExpense(evt) }
            />
          </label>
          <CurrencySelect
            handleChange={ this.createNewExpense }
            defaultValue={ currency }
          />
          <MethodSelect
            handleChange={ this.createNewExpense }
            defaultValue={ method }
          />
          <TagSelect
            handleChange={ this.createNewExpense }
            defaultValue={ tag }
          />
        </fieldset>
        <button type="button" onClick={ () => this.saveExpense() }>
          Adicionar despesa
        </button>
      </form>
    );
  }
}

ExpenseForm.propTypes = {
  setCurrenciesDispatcher: PropTypes.func.isRequired,
  saveExpenseDispatcher: PropTypes.func.isRequired,
  fetchExchangeRatesDispatcher: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  setCurrenciesDispatcher: (data) => dispatch(setCurrencies(data)),
  saveExpenseDispatcher: (data) => dispatch(saveExpense(data)),
  fetchExchangeRatesDispatcher: () => dispatch(fetchExchangeRates()),
});

export default connect(null, mapDispatchToProps)(ExpenseForm);
