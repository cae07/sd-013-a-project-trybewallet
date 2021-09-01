import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import economyAPI from '../actions';
import ExpenseForm from '../components/ExpenseForm';
import Header from '../components/Header';
import ExpenseTable from '../components/ExpenseTable';

class Wallet extends React.Component {
  componentDidMount() {
    const { fetchCurrencies } = this.props;
    fetchCurrencies();
  }

  render() {
    return (
      <main>
        <Header />
        <ExpenseForm />
        <ExpenseTable />
      </main>
    );
  }
}

Wallet.propTypes = {
  fetchCurrencies: PropTypes.func,
}.isRequired;

const mapDispatchToProps = (dispatch) => ({
  fetchCurrencies: () => dispatch(economyAPI()),
});

export default connect(null, mapDispatchToProps)(Wallet);
