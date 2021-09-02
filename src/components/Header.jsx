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
      return acc + Number(curr.value * ask);
    }, 0);

    return (
      <header>
        <h4>Carteira Digital</h4>
        <span data-testid="email-field">{ email }</span>
        <div>
          <span data-testid="total-field">{ total.toFixed(2) }</span>
          <span data-testid="header-currency-field" id="coin">BRL</span>
        </div>
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
