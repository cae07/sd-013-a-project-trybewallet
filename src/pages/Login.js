import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div>
        <form>
          <label htmlFor="email">
            <input
              data-testid="email-input"
              name="email"
              type="email"
            />
          </label>
          <label htmlFor="email">
            <input
              data-testid="password-input"
              name="password"
              type="password"
            />
          </label>
          <button type="submit">
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
