import React from 'react';
import Input from '../components/Input';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      emailIsValid: false,
      passwordIsValid: false,
    };

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  validateEmail(email) {
    const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+/i;
    const isValid = emailRegex.test(email);
    return isValid;
  }

  validatePassword(password) {
    const minPasswordLength = 6;
    const isValid = password.length >= minPasswordLength;
    return isValid;
  }

  handleEmailChange({ target: { value } }) {
    this.setState({
      email: value,
      emailIsValid: this.validateEmail(value),
    });
  }

  handlePasswordChange({ target: { value } }) {
    this.setState({
      password: value,
      passwordIsValid: this.validatePassword(value),
    });
  }

  render() {
    const { email, password, emailIsValid, passwordIsValid } = this.state;

    return (
      <div className="container">
        <form>
          <Input
            name="email"
            type="email"
            placeholder="email@email.com"
            test="email-input"
            value={ email }
            onChange={ this.handleEmailChange }
          />

          <Input
            name="password"
            type="password"
            placeholder="********"
            test="password-input"
            value={ password }
            onChange={ this.handlePasswordChange }
          />

          <button
            type="submit"
            disabled={ !(emailIsValid && passwordIsValid) }
          >
            Entrar
          </button>
        </form>
      </div>);
  }
}

export default Login;
