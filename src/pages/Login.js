import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { userLoggedIn } from '../actions';

const MINIMAL_PASSWORD_LENGTH = 6;
const RE_EMAIL = /^[a-z0-9_.-]+@[a-z]+\.[a-z]{2,3}(?:\.[a-z]{2})?$/;

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      emailError: '',
      passwordError: '',
    };

    this.handleSubmission = this.handleSubmission.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
    this.validatePassword = this.validatePassword.bind(this);
  }

  validateEmail(input) {
    const errorMsg = (RE_EMAIL.test(input))
      ? ''
      : 'Invalid email.';

    this.setState((state) => ({
      ...state,
      emailError: errorMsg,
    }));

    return !errorMsg;
  }

  validatePassword(input) {
    const errorMsg = (input.length < MINIMAL_PASSWORD_LENGTH)
      ? 'Your password must have at least 6 characters.'
      : '';

    this.setState((state) => ({
      ...state,
      passwordError: errorMsg,
    }));

    return !errorMsg;
  }

  handleSubmission(e) {
    e.preventDefault();

    const { logUserIn, history } = this.props;

    // Get data submitted
    const formData = new FormData(e.target);
    const email = formData.get('email');
    const password = formData.get('password');

    if (this.validateEmail(email) && this.validatePassword(password)) {
      logUserIn(email);
      history.push('/carteira');
    }
  }

  render() {
    const { email } = this.props;
    const { emailError, passwordError } = this.state;

    return (
      <form onSubmit={ this.handleSubmission }>
        <label htmlFor="email">
          Email
          <input
            id="email"
            type="text"
            name="email"
            value={ email }
            onBlur={ (e) => this.validateEmail(e.target.value) }
            data-testid="email-input"
          />
        </label>
        <span>{emailError}</span>
        <label htmlFor="password">
          Password
          <input
            id="password"
            type="password"
            name="password"
            onBlur={ (e) => this.validatePassword(e.target.value) }
            data-testid="password-input"
          />
        </label>
        <span>{passwordError}</span>
        <input type="submit" value="Entrar" />
      </form>
    );
  }
}

Login.propTypes = {
  email: PropTypes.string.isRequired,
  logUserIn: PropTypes.func.isRequired,
  history: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  logUserIn: (email) => dispatch(userLoggedIn(email)),
});

export default connect(null, mapDispatchToProps)(Login);
