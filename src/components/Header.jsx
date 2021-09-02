import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { user, expenses } = this.props;
    const { email } = user;

    // Feito com ajuda do Rogério
    
    const total = expenses.reduce((acc, curr) => {
      const { ask } = curr.exchangeRates[curr.currency];
      console.log(curr);
      return acc + Number(curr.value * ask);
    }, 0);

    return (
      <header>
        <span data-testid="email-field">{ email }</span>
        <span data-testid="total-field" id="total-value">{total.toFixed(2)}</span>
        <span data-testid="header-currency-field">BRL</span>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
  expenses: state.wallet.expenses,
});

Header.propTypes = {
  user: PropTypes.arrayOf(),
}.isRequired;

export default connect(mapStateToProps)(Header);
