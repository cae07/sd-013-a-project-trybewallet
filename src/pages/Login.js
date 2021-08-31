import React from 'react';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleValidateEmail(email) {
    const emailValidate = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
    return emailValidate.test(email);
  }

  handleValidatePassword(password, number) {
    return (password.length >= number);
  }

  handleValidateButton(number) {
    const { email, password } = this.state;
    return (
      this.handleValidateEmail(email)
      && this.handleValidatePassword(password, number)
    );
  }

  render() {
    const { email, password } = this.state;
    const minLengthPassword = 6;
    return (
      <form>
        <label htmlFor="email-input">
          <input
            type="text"
            id="email-input"
            name="email"
            placeholder="Digite seu E-mail"
            data-testid="email-input"
            value={ email }
            onChange={ this.handleInput }
          />
        </label>
        <label htmlFor="password-input">
          <input
            type="text"
            id="password-input"
            name="password"
            placeholder="Digite sua Senha"
            data-testid="password-input"
            value={ password }
            onChange={ this.handleInput }
          />
        </label>
        <button
          type="submit"
          disabled={ !this.handleValidateButton(minLengthPassword) }
        >
          Entrar
        </button>
      </form>
    );
  }
}

export default Login;
