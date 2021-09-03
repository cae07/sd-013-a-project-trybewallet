import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import digitalWallet from '../image/digital-wallet.png';

function Header({ email, expenses }) {
  // Função que calcular o total.
  const total = expenses.reduce((acc, expense) => {
    const { ask } = expense.exchangeRates[expense.currency];
    return acc + expense.value * ask;
  }, 0);

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
          Dispesa Total: R$
          <span>{total.toFixed(2)}</span>
          <span data-testid="header-currency-field">BRL</span>
        </span>
      </section>
    </header>
  );
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf().isRequired,

};

const mapStateToProps = (state) => ({ expenses: state.wallet.expenses });

export default connect(mapStateToProps, null)(Header);
