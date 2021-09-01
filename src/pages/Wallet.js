import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import WalletForm from '../components/WalletForm';
import { actionAddExpense, fetchExchangeRates } from '../actions';

class Wallet extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      expenses: 0,
      currency: 'USD',
      value: 0,
      description: '',
      method: 'money',
      tag: 'food',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    const { target: { id, value } } = event;
    this.setState({
      [id]: value,
    });
  }

  async handleClick() {
    const { getExchangeRates, addExpense } = this.props;
    const { currency, value, description, method, tag } = this.state;
    await getExchangeRates();
    const { state: { wallet: { exchangeRates } } } = this.props;
    const payload = {
      currency,
      value,
      description,
      method,
      tag,
      exchangeRates,
    };
    addExpense(payload);
    this.setState((prevState) => ({
      ...prevState,
      expenses: prevState.expenses + parseInt(value, 10),
    }));
  }

  render() {
    const { state } = this.props;
    const { user: { email } } = state;
    const { expenses } = this.state;
    return (
      <div>
        <header>
          <h2 data-testid="email-field">{ email }</h2>
          <h3 id="expenses" data-testid="total-field">{ expenses }</h3>
          <h3 data-testid="header-currency-field">BRL</h3>
        </header>
        <WalletForm handleChange={ this.handleChange } handleClick={ this.handleClick } />
      </div>);
  }
}

Wallet.propTypes = {
  state: PropTypes.shape().isRequired,
  addExpense: PropTypes.func.isRequired,
  getExchangeRates: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  state,
});

const mapDispatchToProps = (dispatch) => ({
  addExpense: (payload) => dispatch(actionAddExpense(payload)),
  getExchangeRates: () => dispatch(fetchExchangeRates()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
