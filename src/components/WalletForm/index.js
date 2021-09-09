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

  selectMethod(name, labelText) {
    return (
      <label name={ name } htmlFor={ name }>
        {labelText}
        <select id={ name } onChange={ (e) => this.handleChange(e) } name={ name }>
          <option value="Cartão de crédito">Cartão de Crédito</option>
          <option value="Cartão de débito">Cartão de Débito</option>
          <option value="Dinheiro">Dinheiro</option>
        </select>
      </label>
    );
  }

  selectCurrency(name, currency, labelText) {
    return (
      <label name={ name } htmlFor="currency">
        {labelText}
        <select onChange={ (e) => this.handleChange(e) } id={ name } name={ name }>
          <Option currency={ currency } />
        </select>
      </label>
    );
  }

  selectTag(name, labelText) {
    return (
      <label name="tag" htmlFor={ name }>
        {labelText}
        <select id={ name } onChange={ (e) => this.handleChange(e) } name={ name }>
          <option value="Alimentacao">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saude">Saúde</option>
        </select>
      </label>
    );
  }

  createInputs(type, name, value, labelText) {
    const { currency } = this.state;
    const formInput = (
      <FormInput
        type={ type }
        name={ name }
        value={ value }
        label={ labelText }
        onChange={ (e) => this.handleChange(e) }
      />
    );

    const addExpenseButton = (
      <button
        onClick={ (e) => this.handleClick(e) }
        type="submit"
      >
        { labelText }
      </button>
    );
    switch (name || type) {
    case 'currency':
      return this.selectCurrency(name, currency, labelText);
    case 'method':
      return this.selectMethod(name, labelText);
    case 'tag':
      return this.selectTag(name, labelText);
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
