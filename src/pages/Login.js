import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div>

        <h3>Login</h3>

        <label htmlFor="email-input">
          Email:
          <input
            data-testid="email-input"
            type="email"
            placeholder="Insira seu email"
          />
        </label>

        <label htmlFor="password-input">
          Senha:
          <input
            data-testid="password-input"
            type="password"
            placeholder="Insira sua senha"
          />
        </label>

        <button
          type="button"
        >
          Entrar
        </button>

      </div>
    );
  }
}

export default Login;
