import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LoginInput extends Component {
  render() {
    const { func, login } = this.props;

    return (
      <div className="login-input">
        <label htmlFor="login" className="login-label">Login</label>
          <input
            type="text"
            id="login"
            className="log-inp"
            name="email"
            value={ login }
            data-testid="email-input"
            onChange={ func }
          />
        </div>
    );
  }
}

LoginInput.propTypes = {
  func: PropTypes.func,
  login: PropTypes.string,
}.isRequired;

export default LoginInput;
