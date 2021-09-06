import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import WalletForm from '../components/WalletForm';
import WalletExpenses from '../components/WalletExpenses';
import { actionAddExpense, fetchCurrencies } from '../actions';
import WalletHeader from '../components/WalletHeader';

class Wallet extends React.Component {
  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  render() {
    return (
      <div>
        <WalletHeader />
        <WalletForm handleChange={ this.handleChange } handleClick={ this.handleClick } />
        <WalletExpenses />
      </div>);
  }
}

Wallet.propTypes = {
  getCurrencies: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  state,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(fetchCurrencies()),
  addExpense: (payload) => dispatch(actionAddExpense(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
