import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const exchange = (expense) => {
  const rate = expense.exchangeRates[expense.currency].ask;
  return Number(expense.value) * Number(rate);
};

const reducer = (acc, curr) => acc + exchange(curr);

class Header extends React.Component {
  render() {
    const { email, expenses } = this.props;

    const total = expenses.reduce(reducer, 0);

    return (
      <header>
        <span data-testid="email-field">
          {`Email: ${email}`}
        </span>
        Despesa total: R$
        <span data-testid="total-field">
          {Math.round(total * 100) / 100}
        </span>
        <span data-testid="header-currency-field"> BRL</span>
      </header>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string,
    description: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
    method: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
  })).isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Header);
