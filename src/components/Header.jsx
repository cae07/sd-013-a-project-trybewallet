import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  constructor() {
    super();

    this.totalAmount = this.totalAmount.bind(this);
  }

  totalAmount() {
    const { getWalletExpenses } = this.props;
    const result = getWalletExpenses.reduce((acc, curr) => {
      const { value, currency, exchangeRates } = curr;
      const rate = exchangeRates[currency].ask;

      acc += (parseFloat(value) * parseFloat(rate));
      return acc;
    }, 0);
    return Math.round(result * 100) / 100;
  }

  render() {
    const { user } = this.props;
    // console.log(getWalletExpenses);
    // console.log(this.totalAmount());

    return (
      <header data-testid="email-field">
        <h3>
          Email:
          <span>{` ${user}`}</span>
        </h3>

        <div data-testid="total-field">
          <p>
            Despesa total: R$
            {this.totalAmount()}
          </p>
        </div>

        <div data-testid="header-currency-field">
          <p>Câmbio: BRL</p>
        </div>
      </header>
    );
  }
}

const { string } = PropTypes;

Header.propTypes = {
  email: string,
}.isRequired;

const mapStateToProps = (state) => ({
  user: state.user.email,
  getWalletExpenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Header);
