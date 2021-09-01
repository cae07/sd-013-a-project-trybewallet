// React
import React, { Component } from 'react';

// PropTypes
import PropTypes from 'prop-types';

// Redux
import { connect } from 'react-redux';

class WalletHeader extends Component {
  constructor(props) {
    super(props);

    this.calculateExpensesTotal = this.calculateExpensesTotal.bind(this);
  }

  calculateExpensesTotal() {
    const { props: { expenses } } = this;

    return expenses.reduce((acc, { exchangeRates, currency, value }) => {
      const convertedValue = exchangeRates[currency].ask;
      acc += value * convertedValue;
      return acc;
    }, 0).toFixed(2);
  }

  render() {
    const { props: { userEmail, expenses } } = this;
    return (
      <div className="WalletHeader">
        <span
          data-testid="email-field"
        >
          { userEmail }
        </span>
        <span
          data-testid="total-field"
        >
          { expenses.length ? this.calculateExpensesTotal() : 0 }
        </span>
        <span
          data-testid="header-currency-field"
        >
          BRL
        </span>
      </div>
    );
  }
}

WalletHeader.propTypes = {
  userEmail: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (store) => ({
  userEmail: store.user.email,
  expenses: store.wallet.expenses,
});

export default connect(mapStateToProps, null)(WalletHeader);
