import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { userEmail, totalField } = this.props;
    return (
      <div>
        <p data-testid="email-field">{userEmail}</p>
        <p data-testid="total-field">0</p>
        <p data-testid="header-currency-field">BRL</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
  totalField: state.wallet.total,
});

Header.propTypes = {
  userEmail: PropTypes.string.isRequired,
  totalField: PropTypes.number.isRequired,
};

export default connect(mapStateToProps)(Header);
