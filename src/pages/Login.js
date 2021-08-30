import React from 'react';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  }

  render() {
    const { password, email } = this.state;
    const SIX = 6;

    const evaluatorEmail = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}/g
      .test(email);
    const enabled = evaluatorEmail && password.length >= SIX;

    return (
      <>
        <div>
          Login
        </div>
        <form>
          <input
            type="email"
            placeholder="email"
            name="email"
            value={ email }
            onChange={ this.handleChange }
            required
            data-testid="email-input"
          />
          <input
            type="password"
            minLength="6"
            required
            name="password"
            value={ password }
            onChange={ this.handleChange }
            data-testid="password-input"
          />
          <button
            type="submit"
            disabled={ !enabled }
          >
            Entrar
          </button>
        </form>
      </>
    );
  }
}

export default Login;
