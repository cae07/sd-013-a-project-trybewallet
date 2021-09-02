import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FormWallet from '../components/FormWallet';

class Wallet extends React.Component {
  constructor() {
    super();

    this.sumTotal = this.sumTotal.bind(this);
  }

  sumTotal() {
    let sum = 0;
    const { convertValue } = this.props;
    convertValue.forEach((item) => {
      const { value, currency, exchangeRates } = item;
      if (exchangeRates[currency]) {
        sum += Number(value) * Number(exchangeRates[currency].ask);
        return sum;
      } return sum;
    });
    return sum.toFixed(2);
  }

  render() {
    const { emailValue } = this.props;
    return (
      <div>
        <header>
          <span data-testid="email-field">{ emailValue }</span>
          <span data-testid="total-field">{ this.sumTotal() }</span>
          <span data-testid="header-currency-field">BRL</span>
        </header>
        <FormWallet />
      </div>
    );
  }
}

Wallet.propTypes = {
  convertValue: PropTypes.shape({
    forEach: PropTypes.func,
  }).isRequired,
  emailValue: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  emailValue: state.user.email,
  convertValue: state.wallet.expenses,
});

export default connect(mapStateToProps, null)(Wallet);
