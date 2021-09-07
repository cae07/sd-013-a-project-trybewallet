import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="emailLabel">
          <input
            data-testid="email-input"
            placeholder="email"
            type="email"
            name="email"
            id="emailLabel"
          />
        </label>
        <label htmlFor="password">
          <input
            data-testid="password-input"
            placeholder="password"
            type="password"
            name="password"
            id="passwordLabel"
          />
        </label>
        <button
          type="submit"
          id="button"
        >
          Entrar
        </button>
      </form>
    );
  }
}

export default Login;
