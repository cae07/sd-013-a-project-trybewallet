import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  convertCurrency() {
    const { expenses } = this.props;
    return expenses
      .reduce((acc, expense) => {
        const { value, currency, exchangeRates } = expense;
        const { ask } = exchangeRates[currency];
        return (acc + (parseFloat(value) * parseFloat(ask)));
      }, 0);
  }

  render() {
    const { email } = this.props;
    return (
      <header>
        <span data-testid="email-field">
          {email}
        </span>
        <span data-testid="total-field">
          {` - Despesa total: R$${this.convertCurrency().toFixed(2)}`}
        </span>
        <span data-testid="header-currency-field">
          BRL
        </span>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(Object).isRequired,
};

export default connect(mapStateToProps, null)(Header);
