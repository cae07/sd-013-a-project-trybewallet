import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Form from '../form';

class Wallet extends React.Component {
  render() {
    const { email } = this.props;
    return (
      <div>
        TrybeWallet
        <header>
          <p data-testid="email-field">
            Email:
            { email }
          </p>
          <p data-testid="total-field">
            Despesa total:
            0
          </p>
          <p data-testid="header-currency-field">
            Cambio:
            BRL
          </p>
          <Form />
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

Wallet.propTypes = {
  email: PropTypes.string,
}.isRequired;

export default connect(mapStateToProps)(Wallet);
