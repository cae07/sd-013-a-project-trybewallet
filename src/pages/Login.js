import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div
        id="formulário"
      >
        <form>
          <label
            htmlFor="email"
          >
            Email:
            <input
              id="email"
              data-testid="email-input"
              type="email"
              name="email"
            />
          </label>
          <label
            htmlFor="password"
          >
            Senha:
            <input
              id="password"
              data-testid="password-input"
              type="password"
              name="password"
            />
          </label>
          <button
            type="submit"
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
