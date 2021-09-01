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
  constructor() {
    super();
    this.state = {
      expenses: {
        id: 0,
        value: '',
        description: '',
        currency: '',
        method: '',
        tag: '',
      },
      total: 0,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleNextExpense = this.handleNextExpense.bind(this);
  }

  componentDidMount() {
    const { getCoins } = this.props;
    getCoins();
  }

  handleChange(e) {
    const { expenses } = this.state;
    const { name } = e.target;
    const { value } = e.target;
    this.setState(() => ({
      expenses: {
        ...expenses,
        [name]: value,
      },
    }));
  }

  handleNextExpense() {
    const { wallet } = this.props;
    const { currencies } = wallet;
    const { getCoins } = this.props;
    getCoins();
    const { expenses, total } = this.state;
    const { changeValue } = this.props;
    this.setState(() => ({
      expenses: {
        ...expenses,
        id: expenses.id + 1,
        exchengesRate: {
          ...currencies,
        },
      },
      total: (parseInt(total, 0) + parseInt(expenses.value, 0)),
    }));
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
            name="descrição"
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
  currencies: PropTypes.objectOf(PropTypes.string).isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
