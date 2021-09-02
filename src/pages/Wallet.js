import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import InputForm from '../inputForm';

class Wallet extends React.Component {
  render() {
    const { email } = this.props;
    return (
      <header>
        <p>
          Email:
          <span data-testid="email-field">
            { email }
          </span>
        </p>
        <p>
          Despesa total
          <span data-testid="total-field">
            0
          </span>
        </p>
        <p>
          Cambio
          <span data-testid="header-currency-field">
            BRL
          </span>
        </p>
        <InputForm />
      </header>
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
