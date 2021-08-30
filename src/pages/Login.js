import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <>
        <div>
          Login
        </div>
        <form>
          <input
            type="email"
            placeholder="email"
            required
            data-testid="email-input"
          />
          <input
            type="password"
            minLength="6"
            required
            data-testid="password-input"
          />
          <button type="submit">Entrar</button>
        </form>
      </>
    );
  }
}

export default Login;
