import React from 'react';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const { email } = this.props;
    return (
      <div>
        <span data-testid="email-field">
          email:
          {email}
        </span>
        <span data-testid="total-field">............Valor inicial 0</span>
        <span data-testid="header-currency-field"> BRL</span>
      </div>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
};

export default Header;
