import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { userEmail } = this.props;

    return (
      <header>
        <span data-testid="email-field">{userEmail}</span>
        <span data-testid="total-field">0</span>
        <span data-testid="header-currency-field">BRL</span>
      </header>
    );
  }
}

Header.propTypes = {
  userEmail: PropTypes.string.isRequired,
};

const mapStateToProps = ({ user }) => ({
  userEmail: user.email,
});

export default connect(mapStateToProps)(Header);
