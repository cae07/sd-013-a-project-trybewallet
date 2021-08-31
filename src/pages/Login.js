import React from 'react';
import PropTypes from 'prop-types';

const NUMBER_PASSWORD = 6;

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      passwordValidation: false,
      emailValidation: false,
    };

    this.handleLogin = this.handleLogin.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleOnclick = this.handleOnclick.bind(this);
  }

  handleLogin({ target }) {
    const email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/g;
    const emailValidation = email.test(target.value);

    this.setState({
      email: target.value,
      emailValidation,
    });
  }

  handlePassword({ target: { value } }) {
    const passwordValidation = value.length >= NUMBER_PASSWORD;

    this.setState({
      password: value,
      passwordValidation,
    });
  }

  handleOnclick() {
    const { history } = this.props;

    history.push('/carteira');
  }

  render() {
    const { email, password, passwordValidation, emailValidation } = this.state;
    return (
      <div>
        <input
          data-testid="email-input"
          type="email"
          name="email"
          onChange={ this.handleLogin }
          placeholder="email@example.com"
          value={ email }
        />
        <input
          data-testid="password-input"
          type="password"
          name="password"
          onChange={ this.handlePassword }
          placeholder="password"
          value={ password }
        />
        <button
          disabled={ !emailValidation || !passwordValidation }
          type="button"
          onClick={ this.handleOnclick }
        >
          Entrar
        </button>
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default Login;
