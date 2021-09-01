import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  addExpenses() {
    const { expenses } = this.props;
    const total = expenses.reduce((acc, curr) => {
      const { value, currency, exchangeRates } = curr;
      const rate = exchangeRates[currency].ask;
      acc += (parseFloat(value) * parseFloat(rate));
      return acc;
    }, 0);
    return Math.round(total * 100) / 100;
  }

  render() {
    const { email } = this.props;
    return (
      <header>
        <p>
          Email:
          <span data-testid="email-field">{ email }</span>
          <span>
            Despesa Total: R$
            <span data-testid="total-field">{this.addExpenses()}</span>
            <span data-testid="header-currency-field">BRL</span>
          </span>
        </p>
      </header>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string,
  expenses: PropTypes.arrayOf(PropTypes.any).isRequired,
};

Header.defaultProps = {
  email: '',
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Header);
