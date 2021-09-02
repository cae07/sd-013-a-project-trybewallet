import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import Header from '../components/Header';
import ExpenseForm from '../components/ExpenseForm';
import ExpenseTable from '../components/ExpenseTable';
import { fetchCurrencies } from '../actions';

class Wallet extends React.Component {
  componentDidMount() {
    // dispara a action que vai consultar a api
    const { getExchangeRates } = this.props;
    getExchangeRates();
  }

  render() {
    return (
      <div>
        TrybeWallet
        <Header />
        <ExpenseForm />
        <ExpenseTable />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ ...state });

const mapDispatchToProps = (dispatch) => ({
  getExchangeRates: () => dispatch(fetchCurrencies()),
});

Wallet.propTypes = {
  getExchangeRates: propTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
