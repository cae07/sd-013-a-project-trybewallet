import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    const { email, totalExpense } = this.props;
    return (
      <header>
        <h6 data-testid="email-field">
          { email }
        </h6>
        <h6 data-testid="total-field">
          { totalExpense }
        </h6>
        <h6 data-testid="header-currency-field">
          BRL
        </h6>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  totalExpense: state.wallet.expenses
    .reduce((acc, curr) => acc + curr, 0),
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  totalExpense: PropTypes.number.isRequired,
};

export default connect(mapStateToProps)(Header);
