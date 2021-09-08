import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  render() {
    const { userEmail, expenses } = this.props;

    function getTotal(total, item) {
      const originalValue = Number(item.value);
      const itemCurrency = item.currency;
      const exchangeMultiple = Number(item.exchangeRates[itemCurrency].ask);

      return total + (originalValue * exchangeMultiple);
    }

    const totalExpenses = expenses.reduce(getTotal, 0);

    return (
      <div className="container-header">
        <p data-testid="email-field">
          Email:
          {userEmail}
        </p>
        <div>
          <p
            data-testid="total-field"
          >
            Despesa:
            { totalExpenses.toFixed(2) }
          </p>
        </div>
        <div>
          <p data-testid="header-currency-field">BRL</p>
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  userEmail: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Header);
