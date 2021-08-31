import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div>
        <fieldset>
          <label htmlFor="user-name">
            Usuário:
            <input
              name="username"
              id="user-name"
              type="email"
              placeholder="exemplo@trybe.com"
              data-testid="email-input"
            />
          </label>
          <label htmlFor="user-password">
            Senha:
            <input
              name="username"
              id="user-password"
              type="password"
              placeholder="*******"
              data-testid="password-input"
            />
          </label>
          <button type="button">Entrar</button>
        </fieldset>
      </div>);
  }
}

export default Login;
