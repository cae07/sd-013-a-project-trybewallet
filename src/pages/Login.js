import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      valid: false,
    };
    this.validLogin = this.validLogin.bind(this);
    this.handleForm = this.handleForm.bind(this);
  }

  handleForm({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
    this.validLogin();
  }

  validLogin() {
    const { email, password } = this.state;
    const REGEX_EMAIL = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i;
    const REGEX_PASSWORD = 5;
    const isValidEmail = email.match(REGEX_EMAIL) !== null;
    const isValidPassword = password.length >= REGEX_PASSWORD;
    if (isValidEmail === true && isValidPassword === true) {
      this.setState({
        valid: true,
      });
    }
  }

  render() {
    const { valid } = this.state;
    return (
      <>
        <label htmlFor="email">
          Email:
          <input
            name="email"
            type="email"
            data-testid="email-input"
            onChange={ this.handleForm }
          />
        </label>
        <label htmlFor="password">
          Password:
          <input
            name="password"
            type="password"
            data-testid="password-input"
            onChange={ this.handleForm }
          />
        </label>
        <Link to="/carteira">
          {valid
            ? <input id="entrar" type="button" value="Entrar" />
            : <input id="entrar" type="button" value="Entrar" disabled />}
        </Link>
      </>
    );
  }
}

export default Login;
