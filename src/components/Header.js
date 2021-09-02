import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  convertValues() {
    const { expenses } = this.props;
    return expenses
      .reduce(
        (
          acc, { value, exchangeRates, currency },
        ) => acc + (
          parseFloat(value) * parseFloat(exchangeRates[currency].ask)
        ), 0,
      );
  }

  render() {
    const { email } = this.props;
    return (
      <header>
        <span data-testid="email-field">
          { email }
        </span>
        <span
          data-testid="total-field"
        >
          { `Despesa total: R$${this.convertValues().toFixed(2)}` }
        </span>
        <span data-testid="header-currency-field"> BRL</span>
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
