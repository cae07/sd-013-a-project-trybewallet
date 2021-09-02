import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LoginInputs extends Component {
  render() {
    const { email, password, handleChange, handleSubmit, disable } = this.props;

    return (
      <div>
        <label
          htmlFor="email"
        >
          Email:
          <input
            type="email"
            name="email"
            id="input-email"
            data-testid="email-input"
            value={ email }
            onChange={ handleChange }
            required
          />
        </label>
        <label
          htmlFor="password"
        >
          Senha:
          <input
            type="password"
            name="password"
            data-testid="password-input"
            id="input-password"
            value={ password }
            onChange={ handleChange }
            required
          />
        </label>
        <button
          type="button"
          onClick={ handleSubmit }
          disabled={ disable }
        >
          Entrar
        </button>
      </div>
    );
  }
}

LoginInputs.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  disable: PropTypes.bool.isRequired,
};

export default LoginInputs;
