import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LoginInput extends Component {
  render() {
    const { func, login } = this.props;

    return (
      <label htmlFor="login">
        Login
        <input
          type="text"
          id="login"
          name="email"
          value={ login }
          data-testid="email-input"
          onChange={ func }
        />
      </label>
    );
  }
}

LoginInput.propTypes = {
  func: PropTypes.func,
  login: PropTypes.string,
}.isRequired;

export default LoginInput;
