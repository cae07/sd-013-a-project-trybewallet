import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { currenciesFetched } from '../actions';
import AddExpense from '../components/AddExpense';
import Header from '../components/Header';
import fetchCurrencies from '../helpers/fetchers';
import Expenses from '../components/Expenses';

class Wallet extends React.Component {
  componentDidMount() {
    this.getCurrencies();
  }

  async getCurrencies() {
    const { saveCurrencies } = this.props;
    const currencies = await fetchCurrencies();
    saveCurrencies(currencies); // Dispatch the action
  }

  render() {
    return (
      <section>
        <Header />
        <AddExpense />
        <Expenses />
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
