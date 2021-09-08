import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  constructor() {
    super();
    this.totalExpenses = this.totalExpenses.bind(this);
  }

  totalExpenses() {
    const { wallet: { expenses } } = this.props;
    const expenseReduce = expenses.reduce((acc, { value, currency, exchangeRates }) => {
      const { ask } = exchangeRates[currency];
      const conversion = Number(value) * Number(ask);
      return acc + conversion;
    }, 0);
    return expenseReduce;
  }

  render() {
    const { user: { email } } = this.props;
    return (
      <div>
        <header>
          <div data-testid="email-field">
            {email}
          </div>
          <div data-testid="total-field">
            Despesa Total R$
            {this.totalExpenses()}
          </div>
          <div data-testid="header-currency-field">
            BRL
          </div>
        </header>
      </div>
    );
  }
}

Header.propTypes = {
  stateEmail: PropTypes.sting,
}.isRequired;

const mapStateToProps = (state) => ({
  ...state,
});

export default connect(mapStateToProps)(Header);
