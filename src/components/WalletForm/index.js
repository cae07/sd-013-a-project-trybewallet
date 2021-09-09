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
    const { currency } = this.state;

    // start creating dynamic components - in refactoring stage,
    // should be placed into a separate file
    // made by myself =P

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
      <label htmlFor={ name }>
        {labelText}
        <select onChange={ (e) => this.handleChange(e) } name="method">
          <option value="Cartão de crédito">Cartão de Crédito</option>
          <option value="Cartão de débito">Cartão de Débito</option>
          <option value="Dinheiro">Dinheiro</option>
        </select>
      </label>
    );

    // select html tag for ca-TAG-ory of expenses
    const selectTag = (
      <label htmlFor={ name }>
        {labelText}
        <select onChange={ (e) => this.handleChange(e) } name="tag">
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
      <label htmlFor={ name }>
        {labelText}
        <select onChange={ (e) => this.handleChange(e) } name="currency">
          <Option currency={ currency } />
        </select>
      </label>
    );

    // button html tag for add new expenses in to the table
    const addExpenseButton = (
      <button
        onClick={ (e) => this.handleClick(e) }
        type="submit"
      >
        Adicionar despesa
      </button>
    );

    // return the correct component based on the type AND name
    if (formInput.props.type === 'select' && formInput.props.name === 'currency') {
      return selectCurrency;
    }

    if (formInput.props.type === 'select' && formInput.props.name === 'method') {
      return selectMethod;
    }

    if (formInput.props.type === 'select' && formInput.props.name === 'tag') {
      return selectTag;
    }

    if (formInput.props.type === 'button') {
      return addExpenseButton;
    }

    // return the default component if any above isn't met
    return formInput;
  }

  render() {
    const { value, description, currency, tag, method } = this.state;
    return (
      <div className="wallet-control">
        <form className="wallet-add-form">
          { this.createInputs('text', 'value', value, 'Valor') }
          { this.createInputs('text', 'description', description, 'Descrição') }
          { this.createInputs('select', 'currency', currency, 'Moeda') }
          { this.createInputs('select', 'tag', tag, 'Categoria') }
          { this.createInputs('select', 'method', method, 'Método') }
          { this.createInputs('button', '', '', 'Adicionar') }
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
