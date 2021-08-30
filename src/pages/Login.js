import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      invalidEmail: true,
      invalidPassword: true,
      user: {
        email: '',
        password: '',
      },
    };
    this.validateEmail = this.validateEmail.bind(this);
    this.validatePassword = this.validatePassword.bind(this);
    this.formSubmit = this.formSubmit.bind(this);
  }

  validateEmail({ target }) {
    const { user } = this.state;
    const { value } = target;
    const regex = /\S+@\S+\.\S+/;
    if (regex.test(value)) {
      return this.setState({
        invalidEmail: false,
        user: { ...user, email: value },
      });
    } return this.setState({
      invalidEmail: true,
      user: { ...user, email: value },
    });
  }

  validatePassword({ target }) {
    const { user } = this.state;
    const { value } = target;
    const MIN_LENGTH_PASSWORD = 6;
    if (value.length >= MIN_LENGTH_PASSWORD) {
      return this.setState({
        invalidPassword: false,
        user: { ...user, password: value },
      });
    } return this.setState({
      invalidPassword: true,
      user: { ...user, password: value },
    });
  }

  formSubmit() {

  }

  render() {
    const { invalidPassword, invalidEmail } = this.state;
    return (
      <form>
        <label htmlFor="login">
          <input
            id="login"
            type="text"
            data-testid="email-input"
            placeholder="Email"
            onChange={ this.validateEmail }
            name="email"
          />
        </label>
        <label htmlFor="password">
          <input
            id="password"
            type="password"
            data-testid="password-input"
            placeholder="Senha"
            onChange={ this.validatePassword }
            name="password"
          />
        </label>
        <button
          type="button"
          disabled={ invalidEmail || invalidPassword }
        >
          Entrar
        </button>
      </form>
    );
  }
}

export default Login;
