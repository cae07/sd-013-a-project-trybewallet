import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Input from '../components/Input';
import SelectCoin from '../components/SelectCoin';
import SelectPay from '../components/SelectPay';
import SelectTag from '../components/SelectTag';
import { fetchCoin, expenseAdd } from '../actions';
import Button from '../components/Button';
import './Wallet.css';

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

  setValue() {
    const { expense, total } = this.state;
    const { exchangeRates, currency } = expense;
    const array = Object.entries(exchangeRates);
    function select(coin) {
      if (coin[0] === currency) {
        return coin;
      }
    }
    const selected = Object.values(array.filter(select));
    const selected2 = Object.values(selected[0]);
    const { ask } = selected2[1];
    const convert = expense.value * ask;
    this.setState(() => ({
      total: (Number(total, 0) + Number(convert, 0)).toFixed(2),
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
    const { expense, expenses } = this.state;
    const { changeValue } = this.props;
    this.setState(() => ({
      expense: {
        ...expense,
        id: expense.id + 1,
        exchangeRates: {
          ...currencies,
        },
      },
    }));
    expenses.push(expense);
    changeValue(expenses);
    this.setValue();
  }

  render() {
    const { handleChange, handleNextExpense } = this;
    const { total } = this.state;
    const { user } = this.props;
    const { email } = user;
    return (
      <div>
        <header className="email-field" data-testid="email-field">
          <span>
            { email }
          </span>
          <div className="trybewallet">
            <span>
              Trybe Wallet
            </span>
          </div>
        </header>
        <div className="menu">
        <div className="total-field" data-testid="total-field">
          Total:
          {' '}
          { total }
        </div>
        <div className="header-currency-field" data-testid="header-currency-field">
          Resultados em reais (BRL)
        </div>
        </div>
        <form className="form">
          <Input
            id="valor"
            label="Valor"
            onChange={ handleChange }
            name="value"
            type="number"
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
          <SelectTag onChange={ handleChange } />
          <Button name="Adicionar despesa" onClick={ handleNextExpense } />
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
  wallet: state.wallet,
});

const mapDispatchToProps = (dispatch) => ({
  getCoins: () => dispatch(fetchCoin()),
  changeValue: (state) => dispatch(expenseAdd(state)),
});

Wallet.propTypes = {
  user: PropTypes.objectOf(PropTypes.string).isRequired,
  getCoins: PropTypes.func.isRequired,
  changeValue: PropTypes.func.isRequired,
  wallet: PropTypes.objectOf(PropTypes.string).isRequired,
  currencies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
