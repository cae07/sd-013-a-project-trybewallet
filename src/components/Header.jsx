import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      currency: 'BRL',
    };
    this.expensesSum = this.expensesSum.bind(this);
  }

  expensesSum() {
    const { expenses } = this.props;
    if (expenses.length === 0) return 0;
    return expenses
      .map(({ value, currency, exchangeRates }) => exchangeRates[currency].ask * value)
      .reduce((acc, curr) => acc + curr);
  }

  render() {
    const { emailInput } = this.props;
    const expenseValue = this.expensesSum();
    const { currency } = this.state;
    return (
      <div>
        <h1>HEADER BACANUDO</h1>
        <div data-testid="email-field">{ emailInput }</div>
        <div data-testid="total-field">
          Despesas:
          { expenseValue }
          <div data-testid="header-currency-field">
            { currency }
          </div>
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  emailInput: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
  emailInput: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Header);
