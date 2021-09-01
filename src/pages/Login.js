import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <fieldset>
        <label htmlFor="email">
          Email:
          <input
            id="email"
            type="text"
            data-testid="email-input"
          />
        </label>

        <label htmlFor="senha">
          Senha:
          <input
            id="senha"
            type="password"
            data-testid="password-input"
          />
        </label>

        <button type="button">Entrar</button>
      </fieldset>
    );
  }
}

export default Login;
