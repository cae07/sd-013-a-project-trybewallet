import React from 'react';

class Login extends React.Component {
  //  para o email e data-testid="password-input"
  render() {
    return (
      <div>
        <form action="">
          <label htmlFor="email">
            <input placeholder="Insira seu e-mail" id="email" type="text" data-testid="email-input" />
          </label>
          <label htmlFor="password">
            <input placeholder="******" id="password" type="password" data-testid="password-input" />
          </label>
          <button type="submit">Entrar</button>
        </form>
      </div>
    );
  }
}

export default Login;
