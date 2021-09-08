import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

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
      <div className="header-total-expenses">
        <h3
          data-testid="email-field"
        >
          {email}
        </h3>
        <h3
          data-testid="total-field"
        >
          {`Despesa Total: R$ ${this.totalExpenses}`}
        </h3>
        <h3
          data-testid="header-currency-field"
        >
          BRL
        </h3>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state,
});

Header.propTypes = {
  wallet: PropTypes.obj,
  user: PropTypes.obj,
}.isRequired;

export default connect(mapStateToProps)(Header);
