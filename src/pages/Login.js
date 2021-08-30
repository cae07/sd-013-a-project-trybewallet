import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor="input-email">
          Email:
          <input
            type="email"
            name="email"
            id="input-email"
            data-testid="email-input"
          />
        </label>
        <label htmlFor="input-password">
          Senha:
          <input
            type="text"
            name="password"
            id="input-password"
          />
        </label>
        <button type="button">
          Entrar
        </button>
      </div>
    );
  }
}

export default Login;
