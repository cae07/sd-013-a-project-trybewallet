import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import WalletForm from '../components/WalletForm';
import { actionAddExpense, fetchCurrencies } from '../actions';

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

  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  handleChange(event) {
    const { target: { id, value } } = event;
    this.setState({
      [id]: value,
    });
  }

  async handleClick() {
    const { addExpense, getCurrencies } = this.props;
    const { currency, value, description, method, tag } = this.state;
    const exchangeRates = await getCurrencies();
    const payload = {
      currency,
      value,
      description,
      method,
      tag,
      exchangeRates,
    };
    addExpense(payload);
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
  getCurrencies: PropTypes.func.isRequired,
  addExpense: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  state,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(fetchCurrencies()),
  addExpense: (payload) => dispatch(actionAddExpense(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
