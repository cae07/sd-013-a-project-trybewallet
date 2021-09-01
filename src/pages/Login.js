import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div>
        <p>Trybee</p>
        <input
          data-testid="email-input"
          type="email"
          placeholder="user@email.com"
        />
        <input
          data-testid="password-input"
          type="password"
          placeholder="*********"
        />
        <button type="submit">Entrar</button>
      </div>
    );
  }
}

export default Login;
