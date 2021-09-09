/* eslint-disable max-lines-per-function */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { fetchData, updateExpenses } from '../../actions';
import Option from '../Option/Option';
import ExpensesData from '../ExpensesData';
import FormInput from '../FormInput';
import './WalletForm.css';

class WalletForm extends Component {
  constructor() {
    super();
    this.state = {
      value: '',
      description: '',
      currency: 'USD',
      method: 'Cartão de crédito',
      tag: 'Alimentação',
    };
  }

  componentDidMount() {
    const { fetchCurrencies } = this.props;
    fetchCurrencies();
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  async handleClick(e) {
    e.preventDefault();
    const { dispatchExpense, expenses, fetchCurrencies } = this.props;
    const spreadExpenses = { id: expenses.length, ...this.state };
    const exchangeRates = await fetchCurrencies();
    dispatchExpense({ ...spreadExpenses, exchangeRates });

    return <Redirect to="/carteira" />;
  }

  createInputs(type, name, value, labelText) {
    // start creating dynamic components - in refactoring stage,
    // should be placed into a separate file
    // made by myself =P
    const { currency } = this.state;

    // general text or number input
    const formInput = (
      <FormInput
        type={ type }
        name={ name }
        value={ value }
        label={ labelText }
        onChange={ (e) => this.handleChange(e) }
      />
    );

    // select html tag for payment method
    const selectMethod = (
      <label name="method" htmlFor={ name }>
        {labelText}
        <select id={ name } onChange={ (e) => this.handleChange(e) } name="method">
          <option value="Cartão de crédito">Cartão de Crédito</option>
          <option value="Cartão de débito">Cartão de Débito</option>
          <option value="Dinheiro">Dinheiro</option>
        </select>
      </label>
    );

    // select html tag for ca-TAG-ory of expenses
    const selectTag = (
      <label name="tag" htmlFor={ name }>
        {labelText}
        <select id={ name } onChange={ (e) => this.handleChange(e) } name="tag">
          <option value="Alimentacao">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saude">Saúde</option>
        </select>
      </label>
    );

    // select html tag for currency
    const selectCurrency = (
      <label name="currency" htmlFor="currency">
        {labelText}
        <select onChange={ (e) => this.handleChange(e) } id={ name } name="currency">
          <Option currency={ currency } />
        </select>
      </label>
    );

    // button html tag for add new expenses in to the table
    const addExpenseButton = (
      <label htmlFor={ name }>
        <button
          name="button"
          onClick={ (e) => this.handleClick(e) }
          type="button"
          id={ name }
        >
          { labelText }
        </button>
      </label>
    );

    // return the correct component based on the type AND name
    // prefer using switch case because of complexity
    // this case search for the correct component based on the name or type

    switch (name || type) {
    case 'currency':
      return selectCurrency;

    case 'method':
      return selectMethod;

    case 'tag':
      return selectTag;

    case 'value':
      return formInput;

    case 'description':
      return formInput;

    case 'button':
      return addExpenseButton;

    default:
      return formInput;
    }
  }

  render() {
    const { value, description, currency, tag, method } = this.state;
    return (
      <div className="wallet-control">
        <form className="wallet-add-form">
          { this.createInputs('text', 'value', value, 'Valor') }
          { this.createInputs('text', 'description', description, 'Descrição') }
          { this.createInputs('select', 'currency', currency, 'Moeda') }
          { this.createInputs('select', 'tag', tag, 'Tag') }
          { this.createInputs('select', 'method', method, 'Método de pagamento') }
          { this.createInputs('button', '', '', 'Adicionar despesa') }
        </form>

        <ExpensesData />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCurrencies: () => dispatch(fetchData()),
  dispatchExpense: (expense) => dispatch(updateExpenses(expense)),
});

WalletForm.propTypes = {
  fetchCurrencies: PropTypes.func.isRequired,
  dispatchExpense: PropTypes.func.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(WalletForm);
