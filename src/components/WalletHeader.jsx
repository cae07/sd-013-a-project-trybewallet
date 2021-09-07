import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class WalletHeader extends React.Component {
  sumExpenses() {
    const { expenses } = this.props;
    return expenses.reduce((acc, curr) => {
      const { ask } = curr.exchangeRates[curr.currency];
      return acc + parseFloat(curr.value * ask);
    }, 0);
  }

  render() {
    const { email } = this.props;
    return (
      <div className="container">
        <header
          className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom"
        >
          <h2 data-testid="email-field">
            Email:
            {' '}
            { email }
          </h2>
          <h3
            id="expenses"
            data-testid="total-field"
          >
            Despesa Total:
            {' '}
            { this.sumExpenses().toFixed(2) }
          </h3>
          <h3 data-testid="header-currency-field">BRL</h3>
        </header>
      </div>
    );
  }
}

WalletHeader.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.shape().isRequired,
  reduce: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(WalletHeader);
