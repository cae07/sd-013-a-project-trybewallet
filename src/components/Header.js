import React from 'react';
import PropTypes from 'prop-types';
import digitalWallet from '../image/digital-wallet.png';

function Header({ email }) {
  return (
    <header className="flex container-header">
      <section className="image-header">
        <img src={ digitalWallet } width="30px" alt="lobo wallet" />
      </section>
      <section>
        Bem Vindo Ao Wallet
      </section>
      <section>
        <span data-testid="email-field">
          Email:
          { ` ${email} ` }
        </span>
        <span data-testid="total-field">
          Dispesa Total: R$ 0,00
          <span data-testid="header-currency-field">BRL</span>
        </span>
      </section>
    </header>
  );
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
};

export default Header;
