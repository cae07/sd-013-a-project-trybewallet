import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      validate: {
        login: false,
        password: false,
      },
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.emailValidation = this.emailValidation.bind(this);
    this.passwordValidation = this.passwordValidation.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    handleEmail(email);
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value }, () => {
      this.loginValidation();
    });
  }

  emailValidation() {
    const { email, validate } = this.state;
    const EMAIL_VALIDATION = /^[\w]+@([\w]+\.)+[\w]{2,4}$/gi;
    if (EMAIL_VALIDATION.test(email)) {
      return this.state({
        validate: {
          ...validate,
          login: true,
        },
      });
    }
    this.state({ validate: { ...validate, login: false } })
  }

  passwordValidation() {
    const { password, validate } = this.state;
    const MIN_PASSWORD_LENGTH = 6;
    if (password.length >= MIN_PASSWORD_LENGTH) {
      return this.setState({
        validate: {
          ...validate,
          password: true,
        },
      });
    }
    return this.setState({ validate: { ...validate, password: true } });
  }

  render() {
    const { email, password, validate } = this.state;
    return (
      <main>
        <form>
          <input
            type="text"
            name="email"
            value={ email }
            onChange={ this.handleChange }
            data-testid="email-input"
          />
          <input
            type="password"
            name="password"
            value={ password }
            onChange={ this.handleChange }
            data-testid="password-input"
          />
          <button
            type="submit"
            disabled={ validate.login === false || validate.password === false }
            onClick={ this.handleClick }
          >
            Entrar
          </button>
        </form>
      </main>
    );
  }
}

export default Login;
