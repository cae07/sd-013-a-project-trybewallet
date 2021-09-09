import React from 'react';
import PropTypes from 'prop-types';
import imagem from '../trybe-logo-login.png'; // lembrar de descomentar linha 11
import './Header.css';

class Header extends React.Component {
  render() {
    const { email } = this.props;
    return (
      <header className="header-container">
        <img className="logo" src={ imagem } alt="" />
        <div className="valor">
          <h4 data-testid="email-field">{`Email: ${email}`}</h4>
          <div className="preco">
            <h4 data-testid="total-field">Despesa Total: R$ 0</h4>
            <h4 data-testid="header-currency-field">BRL</h4>
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
