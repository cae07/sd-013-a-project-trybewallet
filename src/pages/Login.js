import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div>
        <input
          type="email"
          data-testid="email-input"
          placeholder="Insira seu Email"
        />
        <input
          type="password"
          data-testid="password-input"
          placeholder="Insira sua senha"
        />
        <button type="button">Entrar</button>
      </div>
    );
  }
}

export default Login;
