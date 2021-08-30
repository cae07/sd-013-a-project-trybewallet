import React from 'react';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      invalidEmail: true,
      invalidPassowrd: true,
      user: {
        email: '',
        password: '',
      },
    };
    this.validateEmail = this.validateEmail.bind(this);
    this.validatePassoword = this.validatePassoword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit() {

  }

  validatePassoword({ target }) {
    const { value } = target;
    const minLength = 6;
    if (value.length >= minLength) {
      return this.setState({
        invalidPassowrd: false,
        user: { ...user, password: value } });
    }
    return this.setState({
      invalidPassowrd: true,
      user: { ...user, password: value } });
  }

  validateEmail({ target }) {
    const { value } = target;
    const regex = /\S+@\S+\.\S+/;
    if (regex.test(value)) {
      return this.setState({ invalidEmail: false });
    }
    return this.setState({ invalidEmail: true });
  }

  render() {
    const { invalidPassowrd, invalidEmail, user } = this.state;
    return (
      <form onSubmit={ this.onSubmit }>
        <label htmlFor="label-email">
          Email:
          <input
            onChange={ this.validateEmail }
            name="email"
            type="email"
            data-testid="email-input"
          />
        </label>
        <label htmlFor="label-password">
          Senha:
          <input
            onChange={ this.validatePassoword }
            type="password"
            data-testid="password-input"
          />
        </label>
        <button
          disabled={ invalidPassowrd || invalidEmail }
          type="button"
        >
          Entrar
        </button>
      </form>
    );
  }
}

export default (Login);
