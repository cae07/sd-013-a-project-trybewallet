import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { currenciesFetched } from '../actions';
import AddExpense from '../components/AddExpense';
import Header from '../components/Header';

class Wallet extends React.Component {
  componentDidMount() {
    this.getCurrencies();
  }

  async getCurrencies() {
    const { saveCurrencies } = this.props;

    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const data = await response.json();
    const currencyCodes = Object.keys(data);
    const toBeRemoved = currencyCodes.indexOf('USDT');
    currencyCodes.splice(toBeRemoved, 1);
    const currencies = currencyCodes
      .map((code) => (
        { code,
          name: data[code].name,
          ask: data[code].ask,
        }
      ));

    saveCurrencies(currencies); // Dispatch the action
  }

  render() {
    return (
      <section>
        <Header />
        <AddExpense />
      </section>
    );
  }
}

Wallet.propTypes = {
  saveCurrencies: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  saveCurrencies: (data) => dispatch(currenciesFetched(data)),
});

export default connect(null, mapDispatchToProps)(Wallet);
