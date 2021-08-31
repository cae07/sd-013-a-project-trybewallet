import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import digitalWallet from '../image/digital-wallet.png';
import './wallet.css';

class Wallet extends React.Component {
  render() {
    const { email } = this.props;
    return (
      <header className="flex container-header">
        <section className="image-header">
          <img src={ digitalWallet } width="30px" alt="lobo wallet" />
        </section>
        <section>
          Bem Vindo Ao Wallet
        </section>
        <section data-testid="email-field">
          Email:
          { ` ${email}` }
        </section>
        <section data-testid="total-field">
          Dispesa Total: R$ 0,00
          <span data-testid="header-currency-field">BRL</span>
        </section>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({ email: state.user.email });

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
};
export default connect(mapStateToProps)(Wallet);
