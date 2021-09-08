import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { round2Digits, currencyFormat } from './TableRow';

class Header extends Component {
  render() {
    const { email } = this.props;
    let { totalExpenses = 0 } = this.props;
    totalExpenses = currencyFormat(round2Digits(totalExpenses));
    return (
      <header className="expense-header">
        <div className="logo">
          <h1>WALLET</h1>
          <img src="https://i.imgur.com/K5eEoXI.png" alt="wallet logo" />
        </div>
        <div className="info-container">
          <h6 data-testid="email-field">
            { email }
          </h6>
          <h6 data-testid="total-field">
            { `Despesa total: R$ ${totalExpenses} ` }
            <span data-testid="header-currency-field">
              BRL
            </span>
          </h6>
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  totalExpenses: state.wallet.totalExpenses,
});

Header.defaultProps = {
  totalExpenses: undefined,
};

Header.propTypes = {
  email: PropTypes.string.isRequired,
  totalExpenses: PropTypes.number,
};

export default connect(mapStateToProps)(Header);
