import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  addExpenses() {
    const { getExpenses } = this.props;
    const total = getExpenses.reduce((acc, curr) => {
      const { value, currency, exchangeRates } = curr;
      const rate = exchangeRates[currency].ask;
      acc += (parseFloat(value) * parseFloat(rate));
      return acc;
    }, 0);
    return Math.round(total * 100) / 100;
  }

  render() {
     const { user } = this.props; 
    const { email } = user; 
    return (
      <header>
        <p>
          Email:
          <span data-testid="email-field">{ email }</span>
          <span>
            Despesa total: R$
            <span data-testid="total-field">{this.addExpenses()}</span>
            <span data-testid="header-currency-field">BRL</span>
          </span>
        </p>
      </header>
    );
  } 
}

Header.propTypes = {
  user: PropTypes.objectOf(PropTypes.string),
}.isRequired;

const mapStateToProps = (state) => ({
  user: state.user,
  getExpenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Header);