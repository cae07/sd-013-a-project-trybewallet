import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { roundNumber } from '../data';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.getTotalExpensesInBRL = this.getTotalExpensesInBRL.bind(this);
  }

  getTotalExpensesInBRL() {
    const { expenses } = this.props;

    const totalExpenses = expenses
      .reduce((acc, { value, currency, exchangeRates }) => (
        acc + Number(value) * Number(Object
          .entries(exchangeRates)
          .find(([name]) => name === currency)[1].ask)
      ), 0);

    return roundNumber(totalExpenses);
  }

  render() {
    const { user, expenses } = this.props;

    return (
      <header>
        <div>
          <p data-testid="email-field">{ user }</p>
          <p data-testid="total-field">
            { expenses.length === 0 ? roundNumber(0) : this.getTotalExpensesInBRL() }
            <span data-testid="header-currency-field">BRL</span>
          </p>
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user.email,
  expenses: state.wallet.expenses,
});

Header.propTypes = {
  user: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, null)(Header);
