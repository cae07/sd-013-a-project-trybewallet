import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import WalletInput from '../component/walletInput';

class Wallet extends React.Component {
  render() {
    const { emailGlobalState, totalExpenses = 0 } = this.props;
    return (
      <section>
        <header>
          <p data-testid="email-field">
            { emailGlobalState }
          </p>
          <p data-testid="total-field">{ totalExpenses }</p>
          <p data-testid="header-currency-field">BRL</p>
        </header>
        <WalletInput />
      </section>
    );
  }
}

Wallet.propTypes = {
  emailGlobalState: PropTypes.string.isRequired,
  totalExpenses: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  emailGlobalState: state.user.email,
  totalExpenses: state.wallet.totalExpenses,
});

export default connect(mapStateToProps)(Wallet);
