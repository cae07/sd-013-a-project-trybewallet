import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.updateTotal = this.updateTotal.bind(this);
  }

  updateTotal() {
    const { expenses } = this.props;
    let total = 0;
    expenses.forEach(({ value, currency, exchangeRates }) => {
      total += (parseFloat(value) * parseFloat(exchangeRates[currency].ask));
    });
    return total.toFixed(2);
  }

  render() {
    const { email } = this.props;
    return (
      <div>
        <span data-testid="email-field">{ email }</span>
        <span data-testid="total-field">{this.updateTotal()}</span>
        <span data-testid="header-currency-field">BRL</span>
      </div>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = ({ user, wallet }) => ({
  email: user.email,
  expenses: wallet.expenses,
});

export default connect(mapStateToProps)(Header);
