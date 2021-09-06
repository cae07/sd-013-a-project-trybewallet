import React, { Component } from 'react';
import { connect } from 'react-redux';

class Login extends Component {
  render() {
    return (
      <div>
        { 'Email: ' }
        <input
          type="email"
          data-testid="email-input"
          name="email"
          onChange={ this.handleInput }
        />
        { 'Senha: ' }
        <input
          type="password"
          data-testid="password-input"
          name="password"
          onChange={ this.handleInput }
        />
        <button type="button">
          Entrar
        </button>
      </div>
    );
  }
}

export default connect(null, null)(Login);
