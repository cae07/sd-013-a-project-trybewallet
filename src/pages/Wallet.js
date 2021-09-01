import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Input from '../components/Input';
import SelectCoin from '../components/SelectCoin';
import SelectPay from '../components/SelectPay';
import SelectTag from '../components/SelectTag';
import { fetchCoin, expenseAdd } from '../actions';
import Button from '../components/Button';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expenses: [],
      expense: {
        id: 0,
        value: '',
        description: '',
        currency: 'USD',
        method: 'Dinheiro',
        tag: 'Alimentação',
      },
      total: 0,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleNextExpense = this.handleNextExpense.bind(this);
    this.setCoinsState = this.setCoinsState.bind(this);
  }

  componentDidMount() {
    this.setCoinsState();
  }

  async setCoinsState() {
    const { getCoins } = this.props;
    await getCoins();
    const { wallet } = this.props;
    const { currencies } = wallet;
    const idexpens = this.state;
    const { id, method, currency, tag } = idexpens.expense;
    this.setState(() => ({
      expense: {
        id,
        method,
        currency,
        tag,
        exchangeRates: {
          ...currencies,
        },
      },
    }));
  }

  handleChange(e) {
    const { expense } = this.state;
    const { name } = e.target;
    const { value } = e.target;
    this.setState(() => ({
      expense: {
        ...expense,
        [name]: value,
      },
    }));
  }
  handleNextExpense() {
    const { wallet } = this.props;
    const { currencies } = wallet;
    const { getCoins } = this.props;
    getCoins();
    const { expense, total, expenses } = this.state;
    const { changeValue } = this.props;
    this.setState(() => ({
      expense: {
        ...expense,
        id: expense.id + 1,
        exchangeRates: {
          ...currencies,
        },
      },
      total: (parseInt(total, 0) + parseInt(expense.value, 0)),
    }));
    expenses.push(expense);
    changeValue(expenses);
  }

  render() {
    const { handleChange, handleNextExpense } = this;
    const { total } = this.state;
    const { user } = this.props;
    const { email } = user;
    return (
      <div>
        <header data-testid="email-field">
          <span>
            { email }
          </span>
          <span>
            TrybeWallet
          </span>
        </header>
        <div data-testid="total-field">
          { total }
        </div>
        <div data-testid="header-currency-field">
          BRL
        </div>
        <form>
          <Input
            label="Valor"
            onChange={ handleChange }
            name="value"
          />
          <Input
            label="Descrição"
            onChange={ handleChange }
            name="description"
          />
          <SelectCoin
            onChange={ handleChange }
          />
          <SelectPay
            onChange={ handleChange }
          />
          <SelectTag
            onChange={ handleChange }
          />
          <Button
            name="Adicionar despesa"
            onClick={ handleNextExpense }
          />
        </form>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  user: state.user,
  wallet: state.wallet,