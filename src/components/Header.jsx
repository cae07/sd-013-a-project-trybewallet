import React from 'react';
import PropTypes from 'prop-types';
import imagem from '../trybe-logo-login.png'; // lembrar de descomentar linha 11
import './Header.css';

class Header extends React.Component {
  render() {
    const { email } = this.props;
    return (
      <header id="header-container">
        <img id="logo" src={ imagem } alt="" />
        <div id="valor">
          <h3 data-testid="email-field">{`Email: ${email}`}</h3>
          <div id="preco">
            <h3 data-testid="total-field">Despesa Total: R$ 0</h3>
            <h3 data-testid="header-currency-field">BRL</h3>
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
