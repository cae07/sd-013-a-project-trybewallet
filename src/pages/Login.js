import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="login">
          <input id="login" type="text" data-testid="email-input" />
        </label>
        <label htmlFor="pass">
          <input id="pass" type="password" data-testid="password-input" />
        </label>
        <buttom type="buttom">Entrar</buttom>
      </form>
    );
  }
}

export default Login;
