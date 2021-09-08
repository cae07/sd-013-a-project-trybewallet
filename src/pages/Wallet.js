import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import Header from '../components/Header';
import WalletForm from '../components/WalletForm';

class Wallet extends React.Component {
  totalValue() {
    const { fullArray } = this.props;

    const total = fullArray.reduce((count, current) => {
      const expense = current.currency;

      const objRates = current.exchangeRates[expense];
      const askRates = objRates.ask;
      const number = parseInt(current.value, 10);

      const valueExchange = number * askRates;

      count += valueExchange;

      return count;
    }, 0);
    return total.toFixed(2);
  }

  // renderHeader() {
  //   const { email } = this.props;
  //   return (
  //     <header>
  //       <div data-testid="email-field">{ email }</div>
  //       <div data-testid="total-field">{ this.totalValue() }</div>
  //       <div data-testid="header-currency-field">BRL</div>
  //     </header>
  //   );
  // }

  render() {
    const { email } = this.props;
    return (
      <>
        <header>
          <div data-testid="email-field">{ email }</div>
          <div data-testid="total-field">{ this.totalValue() }</div>
          <div data-testid="header-currency-field">BRL</div>
        </header>
        <WalletForm />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  fullArray: state.wallet.expenses,
});

Wallet.propTypes = ({
  email: PropTypes.string.isRequired,
  fullArray: PropTypes.arrayOf().isRequired,
});

export default connect(mapStateToProps)(Wallet);
