import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  constructor() {
    super();
    this.sumExpenses = this.sumExpenses.bind(this);
  }

  sumExpenses() {
    const { expenses } = this.props;

    return expenses.reduce((acc, curr) => acc + (Number(curr.value)
    * Number(curr.exchangeRates[curr.currency].ask)), 0).toFixed(2);
  }

  render() {
    const { email } = this.props;
    return (
      <div className="main-header">
        <div className="header-email">
          <span data-testid="email-field">{ email }</span>
        </div>
        <div className="header-total">
          <span data-testid="total-field">{ this.sumExpenses() }</span>
        </div>
        <div className="header-currency">
          <span data-testid="header-currency-field">BRL</span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default connect(mapStateToProps, null)(Header);
