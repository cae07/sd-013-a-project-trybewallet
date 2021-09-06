import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <form>
        <input
          data-testid="email-input"
          type="email"
        />
        <input
          data-testid="password-input"
          type="password"
        />
        <button
          type="submit"
        >
          Entrar
        </button>
      </form>
    );
  }
}

export default Login;
