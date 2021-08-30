import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div>
        <input type="text" data-testid="email-input" placeholder="Email" />
        <input type="text" data-testid="password-input" placeholder="Password" />
        <input type="button" value="Entrar" />
      </div>
    );
  }
}

export default Login;
