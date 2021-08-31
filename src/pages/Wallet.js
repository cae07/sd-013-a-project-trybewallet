import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import WalletBody from './components/WalletBody';
import { getCurrencies, saveNewExpense } from '../actions';

let id = 0;

class Wallet extends React.Component {
  constructor() {
    super();

    this.state = {
      totalExpenses: 0,
      currency: 'USD',
      value: 0,
      description: '',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };

    this.handleChange = this.handleChange.bind(this);
    this.saveExpense = this.saveExpense.bind(this);
  }

  componentDidMount() {
    const { savePairs } = this.props;
    savePairs();
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  async saveExpense() {
    const { value, description, method, tag, currency, totalExpenses } = this.state;
    const { expenseSaving } = this.props;
    this.setState({
      currency: 'USD',
      value: 0,
      description: '',
      method: 'cash',
      tag: 'food',
    });
    const askForExpenseCurrency = await fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json())
      .then((r) => r);
    Object.values(askForExpenseCurrency).forEach((cur) => {
      const newName = cur.name.split('/');
      [cur.name] = newName;
    });
    const globalStateObject = {
      id,
      value,
      description,
      method,
      tag,
      currency,
      exchangeRates: {
        ...askForExpenseCurrency,
      },
    };
    id += 1;
    expenseSaving(globalStateObject);
    let newExpenses = value * askForExpenseCurrency[currency].ask;
    newExpenses = Math.round((newExpenses + totalExpenses) * 100) / 100;
    this.setState({
      totalExpenses: newExpenses,
    });
  }

  render() {
    const { userEmail } = this.props;
    const { totalExpenses, value, description, method, tag, currency } = this.state;
    return (
      <div>
        <header>
          <h4 data-testid="email-field">{userEmail}</h4>
          <h4 data-testid="total-field">{totalExpenses}</h4>
          <h4 data-testid="header-currency-field">BRL</h4>
        </header>
        <WalletBody
          totalExpenses={ totalExpenses }
          value={ value }
          d={ description }
          method={ method }
          tag={ tag }
          crrncy={ currency }
          handleChange={ this.handleChange }
          saveExpense={ this.saveExpense }
        />
      </div>);
  }
}

Wallet.propTypes = {
  userEmail: PropTypes.string.isRequired,
  savePairs: PropTypes.func.isRequired,
  expenseSaving: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
});

const mapDispatchToProps = (dispatch) => ({
  savePairs: () => dispatch(getCurrencies()),
  expenseSaving: (globalStateObject) => dispatch(saveNewExpense(globalStateObject)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
