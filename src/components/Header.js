import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { expenses, email } = this.props;
    let total = 0;

    if (expenses.length > 0) {
      console.log(expenses);
      expenses.map(({ value, exchangeRates, currency }) => {
        total += value * exchangeRates[currency].ask;
        return total;
      });
    }

    return (
      <div>
        <h2 data-testid="email-field">
          Email:
          {` ${email}`}
        </h2>
        <h2 data-testid="total-field">
          Despesa Total:
          {` R$ ${total}`}
        </h2>
        <h2 data-testid="header-currency-field">
          BRL
        </h2>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

Header.propTypes = {
  userEmail: PropTypes.string,
}.isRequires;

export default connect(mapStateToProps)(Header);
