// React
import React, { Component } from 'react';

// PropTypes
import PropTypes from 'prop-types';

// Redux
import { connect } from 'react-redux';
import { setCurrencies, saveExpense, fetchExchangeRates } from '../actions';

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

  async saveExpense(evt) {
    const {
      props: {
        saveExpenseDispatcher,
        fetchExchangeRatesDispatcher,
      },
    } = this;

    evt.preventDefault();

    // Passo 1: Pegar e setar as taxas de câmbio
    await fetchExchangeRatesDispatcher();

    // Passo 2: Adicionar as taxas de câmbio ao estado local
    this.setState((previous) => {
      const { props: { exchangeRates } } = this;
      return (
        {
          ...previous,
          exchangeRates,
        }
      );
    });

    // Passo 3: Mandar todas as informações necessárias para o estado global
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
        <button type="submit" onClick={ (evt) => this.saveExpense(evt) }>
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
  exchangeRates: PropTypes.objectOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
  exchangeRates: state.wallet.exchangeRates,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrenciesDispatcher: (payload) => dispatch(setCurrencies(payload)),
  saveExpenseDispatcher: (payload) => dispatch(saveExpense(payload)),
  fetchExchangeRatesDispatcher: () => dispatch(fetchExchangeRates()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseForm);
