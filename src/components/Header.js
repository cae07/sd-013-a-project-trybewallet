import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    const { email, totalExpenses = 0 } = this.props;
    return (
      <header>
        <h6 data-testid="email-field">
          { email }
        </h6>
        <h6 data-testid="total-field">
          { totalExpenses }
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
