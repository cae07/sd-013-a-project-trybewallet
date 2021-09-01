import React from 'react';
// import PropTypes from 'prop-types';
class Header extends React.Component {
  render() {
    return (
      <header data-testid="email-field">
        <p data-testid="total-field">0</p>
        <p data-testid="header-currency-field">0</p>
      </header>
    );
  }
}

export default Header;
