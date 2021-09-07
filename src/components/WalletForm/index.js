/* eslint-disable max-lines-per-function */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { fetchData, updateExpenses } from '../../actions';
import './WalletForm.css';
import Option from '../Option/Option';

class WalletForm extends Component {
  constructor() {
    super();
    this.state = {
      value: '',
      description: '',
      currency: '',
      payment: '',
      tag: '',
    };

    this.handleChange = this.handleChange.bind(this);
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

  handleClick(e) {
    e.preventDefault();
    const { dispatchExpense, expenses, fetchCurrencies } = this.props;
    const spreadExpenses = { id: expenses.length, ...this.state };
    fetchCurrencies();
    dispatchExpense(spreadExpenses);

    return <Redirect to="/carteira" />;
  }

  render() {
    const { value, description, currency, tag, payment } = this.state;

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
          <label htmlFor="payment">
            Método de Pagamento
            <select
              onChange={ (e) => this.handleChange(e) }
              name="payment"
              id="payment"
              value={ payment }
            >
              <option value="credit">Cartão de Crédito</option>
              <option value="debit">Cartão de Débito</option>
              <option value="cash">Dinheiro</option>
            </select>
          </label>
          <label htmlFor="tag">
            Tag
            <select
              onChange={ (e) => this.handleChange(e) }
              name="tag"
              id="tag"
              value={ tag }
            >
              <option value="alimentacao">Alimentação</option>
              <option value="lazer">Lazer</option>
              <option value="trabalho">Trabalho</option>
              <option value="transporte">Transporte</option>
              <option value="saude">Saúde</option>
            </select>
          </label>
          <button
            onClick={ (e) => this.handleClick(e) }
            type="submit"
          >
            Adicionar Despesa
          </button>
        </form>
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
