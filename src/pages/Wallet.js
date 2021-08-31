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
      payment: 'cash',
      tag: 'food',
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
    const { value, description, payment, tag, currency } = this.state;
    const { expenseSaving } = this.props;
    this.setState({
      currency: 'USD',
      value: 0,
      description: '',
      payment: 'cash',
      tag: 'food',
    });
    const askForExpenseCurrency = await fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json())
      .then((r) => r[currency]);
    const newName = askForExpenseCurrency.name.split('/');
    [askForExpenseCurrency.name] = newName;
    const globalStateObject = {
      id,
      value,
      description,
      payment,
      tag,
      currency,
      exchangeRates: {
        ...askForExpenseCurrency,
      },
    };
    id += 1;
    expenseSaving(globalStateObject);
  }

  render() {
    const { userEmail } = this.props;
    const { totalExpenses, value, description, payment, tag, currency } = this.state;
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
          payment={ payment }
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
