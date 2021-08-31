import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <form>
        <input htmlFor="" data-testid="email-input" />
        Email
        <input htmlFor="" data-testid="password-input" />
        Senha
        <button type="submit">Entrar</button>
      </form>
    );
  }
}

export default Login;
