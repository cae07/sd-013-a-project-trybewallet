import React from 'react';

class LoginUser extends React.Component {
  render() {
    return (
      <div>
        <input type="email" data-testid="email-input" />
        <input type="password" data-testid="password-input" />
        <button type="button">Entrar</button>
      </div>
    );
  }
}

export default LoginUser;
