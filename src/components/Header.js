import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { email } = this.props;
    return (
      <div className="main-header">
        <div className="header-email">
          <span data-testid="email-field">{ email }</span>
        </div>
        <div className="header-total">
          <span data-testid="total-field">0</span>
        </div>
        <div className="header-currency">
          <span data-testid="header-currency-field">BRL</span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, null)(Header);
