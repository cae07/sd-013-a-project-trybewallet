import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="email-input">
          Email:
          <input
            type="text"
            data-testid="email-input"
          />
        </label>
        <label htmlFor="email-input">
          Senha:
          <input
            type="number"
            data-testid="password-input"
          />
        </label>
        <button
          type="button"
        >
          Entrar
        </button>
      </form>
    );
  }
}

export default Login;
