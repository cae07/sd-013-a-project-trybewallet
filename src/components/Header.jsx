import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import economyAPI from '../actions';

class Header extends Component {
  constructor(props) {
    super(props);
    this.totalExpenses = this.totalExpenses.bind(this);
  }

  totalExpenses() {
    const { expenses } = this.props;

    const totalExpenses = expenses.reduce((previousValue, currentValue) => {
      const { value, currency, exchangeRates } = currentValue;
      const expenseJson = parseFloat(exchangeRates[currency].ask);
      return previousValue + parseFloat(value) * expenseJson;
    }, 0);
    return totalExpenses.toFixed(2);
  }

  render() {
    const { email } = this.props;
    return (
      <header>
        <h3>Trybe Wallet</h3>
        <p data-testid="email-field">{`E-mail: ${email}`}</p>
        <div>
          <span data-testid="total-field">
            {`Despesa Total: R$ ${this.totalExpenses()}`}
          </span>
          <span data-testid="header-currency-field">BRL</span>
        </div>
      </header>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  startAPI: () => dispatch(economyAPI()),
});

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

Header.propTypes = {
  email: PropTypes.string,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Header);
