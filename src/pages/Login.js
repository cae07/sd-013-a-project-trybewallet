import React from 'react';
import './Login.css';

class Login extends React.Component {
  render() {
    return (
      <main className="login-container">
        <form>

          <fieldset>
            <legend>Faça seu Login</legend>
            <div data-testid="email-input" className="email-input">
              <input type="text" placeholder="Username" />
            </div>

            <div data-testid="password-input" className="password-input">
              <input type="password" placeholder="Password" />
            </div>

            <button type="submit">Entrar</button>
          </fieldset>

        </form>

      </main>
    );
  }
}

export default Login;
