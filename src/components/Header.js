import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { userEmail } = this.props;
    return (
      <div>
        <h2 data-testid="email-field">
          Email:
          {` ${userEmail}`}
        </h2>
        <h2 data-testid="total-field">
          Despesa Total:
          {` R$ ${0}`}
        </h2>
        <h2 data-testid="header-currency-field">
          BRL
        </h2>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
});

Header.propTypes = {
  userEmail: PropTypes.string,
}.isRequires;

export default connect(mapStateToProps)(Header);
