import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="login">
          <input id="login" type="text" data-testid="email-input" />
        </label>
        <label htmlFor="password">
          <input id="password" type="password" data-testid="password-input" />
        </label>
        <button type="button">Entrar</button>
      </form>
    );
  }
}

export default Login;
