import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <>
        <label htmlFor="login">
          Email:
          <input
            name="login"
            type="text"
            data-testid="email-input"
          />
        </label>
        <label htmlFor="password">
          Password:
          <input
            name="password"
            type="password"
            data-testid="password-input"
          />
        </label>
        <input type="button" value="Entrar" />
      </>
    );
  }
}

export default Login;
