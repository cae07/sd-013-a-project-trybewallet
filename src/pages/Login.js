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
    const { value } = target;
    const { user } = this.state;
    const regex = /\S+@\S+\.\S+/; // regex sugerido pelo gessé
    if (regex.test(value)) {
      return this.setState({
        invalidEmail: false,
        user: { ...user, email: value },
      });
    }
    return this.setState({
      invalidEmail: true,
      user: { ...user, email: value },
    });
  }

  validatePassword({ target }) {
    const { value } = target;
    const { user } = this.state;
    const MIN_LENGTH_PASSWORD = 6;
    if (value.length >= MIN_LENGTH_PASSWORD) {
      return this.setState({
        invalidPassword: false,
        user: { ...user, password: value },
      });
    }
    return this.setState({
      invalidPassword: true,
      user: { ...user, password: value },
    });
  }

  formSubmit() {

  }

  render() {
    const { invalidEmail, invalidPassword } = this.state;

    return (
      <form>
        <label htmlFor="login">
          <input
            onChange={ this.validateEmail }
            id="login"
            type="email"
            name="email"
            placeholder="Email"
            data-testid="email-input"
          />
        </label>
        <label htmlFor="password">
          <input
            onChange={ this.validatePassword }
            id="password"
            type="password"
            name="password"
            placeholder="******"
            data-testid="password-input"
          />
        </label>
        <button
          type="button"
          disabled={
            invalidEmail || invalidPassword
          }
        >
          Entrar
        </button>
      </form>
    );
  }
}

export default Login;
