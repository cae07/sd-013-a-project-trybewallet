import React from 'react';
import './Login.css';

class Login extends React.Component {
  render() {
    return (
      <main className="login-container">
        <form>

          <fieldset>
            <legend>Faça seu Login</legend>
            <div className="username-input">
              <input type="text" placeholder="Username" />
            </div>

            <div className="password-input">
              <input type="password" placeholder="Password" />
            </div>

            <button type="submit">Login</button>
          </fieldset>

        </form>

      </main>
    );
  }
}

export default Login;
