import React from 'react';
import Input from '../components/Input';
import Button from '../components/Button';

class Login extends React.Component {
  render() {
    return (
      <div className="login-container">
        <div className="logo-container">
          <p>logo 1</p>
          <p>logo 2</p>
        </div>
        <Input
          type="text"
          placeholder="E-mail"
          className="input"
          id="email-input"
          data-testid="email-input"
        />
        <Input
          type="password"
          placeholder="Senha"
          className="input"
          id="password-input"
          data-testid="password-input"
        />
        <Button
          id="submit-button"
          text="Enviar"
        />
      </div>
    );
  }
}

export default Login;
