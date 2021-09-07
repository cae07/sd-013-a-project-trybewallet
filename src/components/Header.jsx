import React from 'react';
import PropTypes from 'prop-types';
// import imagem from '../trybe-logo-login.png'; lembrar de descomentar linha 11
// import './Header.css';

class Header extends React.Component {
  render() {
    const { email } = this.props;
    return (
      <header id="header-container">
        {/* <img id="logo" src={ imagem } alt="" /> */}
        <div id="valor">
          <p data-testid="email-field">{`Email: ${email}`}</p>
          <div id="preco">
            <p data-testid="total-field">Despesa Total: R$ 0</p>
            <p data-testid="header-currency-field">BRL</p>
          </div>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string,
}.isRequired;

export default Header;
