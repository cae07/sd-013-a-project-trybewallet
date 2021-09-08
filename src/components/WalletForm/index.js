/* eslint-disable max-lines-per-function */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { fetchData, updateExpenses } from '../../actions';
import './WalletForm.css';
import Option from '../Option/Option';
import ExpensesData from '../ExpensesData';

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

  render() {
    const { value, description, currency, tag, method } = this.state;

    return (
      <div className="wallet-control">
        <form className="wallet-add-form">
          <label htmlFor="value">
            Valor
            <input
              value={ value }
              type="number"
              name="value"
              id="value"
              onChange={ (e) => this.handleChange(e) }
            />
          </label>
          <label htmlFor="description">
            Descrição
            <input
              onChange={ (e) => this.handleChange(e) }
              value={ description }
              name="description"
              type="text"
              id="description"
            />
          </label>
          <label name="currency" htmlFor="currency">
            Moeda
            <select
              onChange={ (e) => this.handleChange(e) }
              id="currency"
              name="currency"
            >
              <Option currency={ currency } />
            </select>
          </label>
          <label name="method" htmlFor="method">
            Método de Pagamento
            <select
              onChange={ (e) => this.handleChange(e) }
              name="method"
              id="method"
              value={ method }
            >
              <option value="Cartão de crédito">Cartão de Crédito</option>
              <option value="Cartão de débito">Cartão de Débito</option>
              <option value="Dinheiro">Dinheiro</option>
            </select>
          </label>
          <label name="tag" htmlFor="tag">
            Tag
            <select
              onChange={ (e) => this.handleChange(e) }
              name="tag"
              id="tag"
              value={ tag }
            >
              <option value="Alimentacao">Alimentação</option>
              <option value="Lazer">Lazer</option>
              <option value="Trabalho">Trabalho</option>
              <option value="Transporte">Transporte</option>
              <option value="Saude">Saúde</option>
            </select>
          </label>
          <button
            onClick={ (e) => this.handleClick(e) }
            type="submit"
          >
            Adicionar Despesa
          </button>
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
