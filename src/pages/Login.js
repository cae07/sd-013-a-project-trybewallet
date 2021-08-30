import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div>
        <div>Login</div>
        <input
          type="email"
          data-testid="email-input"
        />
        <input
          type="password"
          placeholder="Insira sua senha"
          data-testid="password-input"
        />
        <button type="button">Entrar</button>
      </div>
    );
  }
}

export default Login;
