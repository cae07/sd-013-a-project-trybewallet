import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div>
        <input
          placeholder="Digite seu email"
          type="email"
          data-testid="email-input"
        />
        <input
          placeholder="Digite sua senha"
          type="password"
          data-testid="password-input"
        />
        <button type="button"> Enviar</button>
      </div>
    ); // codigo aqui
  }
}

export default Login;
