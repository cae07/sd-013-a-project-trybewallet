import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchAPI } from '../actions';
import WalletForm from '../components/WalletForm';

class Wallet extends React.Component {
  componentDidMount() {
    const { walletState } = this.props;
    walletState();
  }

  render() {
    const { email } = this.props;
    return (
      <>
        <header>
          <span data-testid="email-field">{ email }</span>
          <br />
          <span data-testid="total-field">0</span>
          <br />
          <span data-testid="header-currency-field">BRL</span>
        </header>
        <WalletForm />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

const mapDispatchToProps = (dispatch) => ({
  walletState: (payload) => dispatch(fetchAPI(payload)),
});

Wallet.propTypes = {
  email: PropTypes.string,
  walletState: PropTypes.arrayOf(Object),
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
