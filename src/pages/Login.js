import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <form>
        <input data-testid="email-input" type="text" name="email" />
        <br />
        <input data-testid="password-input" type="text" name="name" />
        <br />
        <input type="submit" value="Entrar" />
      </form>
    );
  }
}

export default Login;
