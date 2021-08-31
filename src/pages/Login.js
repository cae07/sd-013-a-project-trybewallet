import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      disabled: true,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.loginValidation = this.loginValidation.bind(this);
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

  loginValidation() {
    const { email, password } = this.state;
    let disabled = false;
    const EMAIL_VALIDATION = /^[\w]+@([\w]+\.)+[\w]{2,4}$/gi;
    const MIN_PASSWORD_LENGTH = 6;
    disabled = !(EMAIL_VALIDATION.test(email) && password.length >= MIN_PASSWORD_LENGTH);
    this.setState({ disabled });
  }

  render() {
    const { email, password, disabled } = this.state;
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
            disabled={ disabled }
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
