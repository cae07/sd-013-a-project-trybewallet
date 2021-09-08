import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchAPI } from '../actions';
import FormsWallet from '../components/FormsWallet';

class Wallet extends React.Component {
  componentDidMount() {
    const { walletState } = this.props;
    walletState();
  }

  render() {
    const { email, expenses } = this.props;
    const amount = expenses
      .reduce((acc, curr) => acc + Number(curr
        .value * curr.exchangeRates[curr.currency].ask), 0);
    return (
      <div>
        <header>
          <h3 data-testid="email-field">{ email }</h3>
          <br />
          <h3 data-testid="total-field">{ amount.toFixed(2) }</h3>
          <br />
          <h3 data-testid="header-currency-field">BRL</h3>
        </header>
        <FormsWallet />
      </div>
    );
  }
}

Wallet.propTypes = {
  email: PropTypes.string,
  walletState: PropTypes.arrayOf(Object),
}.isRequired;

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  walletState: (payload) => dispatch(fetchAPI(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
