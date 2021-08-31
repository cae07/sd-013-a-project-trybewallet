import React from 'react';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const { email } = this.props;
    return (
      <header>
        <p>
          Email:
          <span data-testid="email-field">{ email }</span>
          <span>
            Despesa Total: R$
            <span data-testid="total-field">0</span>
            <span data-testid="header-currency-field">BRL</span>
          </span>
        </p>
      </header>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string,
};

Header.defaultProps = {
  email: '',
};

export default Header;
