import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    const { user } = this.props;
    const { email } = user;
    return (
      <header>
        <span data-testid="email-field">{ email }</span>
        <span data-testid="total-field">0</span>
        <span data-testid="header-currency-field">BRL</span>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});

Header.propTypes = {
  user: PropTypes.arrayOf(),
}.isRequired;

export default connect(mapStateToProps)(Header);
