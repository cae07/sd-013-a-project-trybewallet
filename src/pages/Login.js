import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <fieldset>
        <input data-testid="email-input" type="email" placeholder="Digite seu e-mail" />
        <input data-testid="password-input" type="text" placeholder="Digite sua senha" />
        <button type="button">Entrar</button>
      </fieldset>
    );
  }
}

export default Login;
