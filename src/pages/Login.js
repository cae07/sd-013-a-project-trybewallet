import React from 'react';
import Button from '../components/Button';

class Login extends React.Component {
  render() {
    return (
      <div>
        <form className="LoginContainer">
          <input
            data-testid="email-input"
            type="text"
            placeholder="Email"
          />
          <br />
          <input
            data-testid="password-input"
            type="password"
            placeholder="Senha"
          />
          <br />
          <Button />
        </form>
      </div>
    );
  }
}

export default Login;
