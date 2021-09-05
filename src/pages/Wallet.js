import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Input from '../components/Input';
import SelectCoin from '../components/SelectCoin';
import SelectPay from '../components/SelectPay';
import SelectTag from '../components/SelectTag';
import Table from '../components/Table';
import { fetchCoin, expenseAdd } from '../actions';
import Button from '../components/Button';
import InputNumber from '../components/InputNumber';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expense: {
        id: 0,
        value: 0,
        description: '',
        currency: 'USD',
        method: 'Dinheiro',
        tag: 'Alimentação',
      },
      total: '0.00',
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
    const select = exchangeRates[currency];
    const { ask } = select;
    const convert = expense.value * ask;
    this.setState(() => ({
      total: ((Number(total) + (Number(convert) || 0)).toFixed(2)),
    }));
  }

  handleChange(e) {
    const { expense } = this.state;
    const { name, value } = e.target;
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
    const { expense } = this.state;
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
    this.setValue();
    changeValue(expense);
  }

  render() {
    const { handleChange, handleNextExpense } = this;
    const { total } = this.state;
    const { user } = this.props;
    const { email } = user;
    return (
      <div>
        <header data-testid="email-field">
          <span>{ email }</span>
          <span>TrybeWallet</span>
        </header>
        <div data-testid="total-field">
          { total }
        </div>
        <div data-testid="header-currency-field">
          BRL
        </div>
        <form>
          <InputNumber
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
        <Table />
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
  currencies: PropTypes.arrayOf(PropTypes.object),
};

Wallet.defaultProps = {
  currencies: [],
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
