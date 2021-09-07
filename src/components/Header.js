import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import expensesType from '../proptypes';
import { fixedRounded } from '../helpers';

class Header extends React.Component {
  exchange(expense) {
    const rate = expense.exchangeRates[expense.currency].ask;

    return Number(expense.value) * Number(rate);
  }

  render() {
    const { email, expenses } = this.props;

    const total = expenses.reduce((acc, curr) => acc + this.exchange(curr), 0);

    return (
      <header>
        <span data-testid="email-field">
          {`Email: ${email}`}
        </span>
        Despesa total: R$
        <span data-testid="total-field">
          {fixedRounded(total)}
        </span>
        <span data-testid="header-currency-field"> BRL</span>
      </header>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: expensesType.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
  currencies: state.wallet.currencies,
});

export default connect(mapStateToProps)(Header);
