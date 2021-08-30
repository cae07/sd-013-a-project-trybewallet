import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      authEmail: true,
      authPassword: true,
      user: {
        email: '',
        password: '',
      },
    };
    this.validateEmail = this.validateEmail.bind(this);
    this.validatePassword = this.validatePassword.bind(this);
    this.formSubmit = this.formSubmit.bind(this);
  }

  formSubmit() {

  }

  validateEmail({ target }) {
    const { value } = target;
    const { user } = this.state;
    const regex = /\S+@\S+\.\S+/; // Gesse Turma 13A
    if (regex.test(value)) {
      return this.setState({
        authEmail: false,
        user: { ...user, email: value },
      });
    }
    return this.setState({
      authEmail: true,
      user: { ...user, email: value },
    });
  }

  validatePassword({ target }) {
    const { value } = target;
    const { user } = this.state;
    const MIN_LENGTH_PASSWORD = 6;
    if (value.length >= MIN_LENGTH_PASSWORD) {
      return this.setState({
        authPassword: false,
        user: { ...user, password: value },
      });
    }
    return this.setState({
      authPassword: true,
      user: { ...user, password: value },
    });
  }

  render() {
    const { authEmail, authPassword } = this.state;
    return (
      <form>
        <label htmlFor="login">
          <input
            id="login"
            type="text"
            data-testid="email-input"
            placeholder="Email"
            onChange={ this.validateEmail }
          />
        </label>
        <label htmlFor="pass">
          <input
            id="pass"
            type="password"
            data-testid="password-input"
            placeholder="******"
            onChange={ this.validatePassword }
          />
        </label>
        <button
          disabled={ authEmail || authPassword }
          type="button"
        >
          Entrar
        </button>
      </form>
    );
  }
}

export default Login;
