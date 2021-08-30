import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <main>
        <form>
          <div
            className="email"
          >
            <label
              htmlFor="email"
            >
              Email
              <input
                data-testid="email-input"
                type="text"
                id="email"
                value=""
                placeholder="email"
                name="email"
              />
            </label>
          </div>
          <div
            className="password"
          >
            <label
              htmlFor="password"
            >
              Password
              <input
                data-testid="password-input"
                type="password"
                id="password"
                value=""
                placeholder="password"
                name="password"
              />
            </label>
          </div>
          <div
            className="button"
          >
            <button type="button">Entrar</button>
          </div>
        </form>
      </main>
    );
  }
}

export default Login;
