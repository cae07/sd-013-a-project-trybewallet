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
      email: '',
      password: '',
    };

    this.handleSubmission = this.handleSubmission.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  handleEmailChange(userInput) {
    const value = (RE_EMAIL.test(userInput))
      ? userInput
      : '';

    this.setState({ email: value });
  }

  handlePasswordChange(userInput) {
    const value = (userInput.length >= MINIMAL_PASSWORD_LENGTH)
      ? userInput
      : '';

    this.setState({ password: value });
  }

  handleSubmission(e) {
    e.preventDefault();

    const { email, password } = this.state;
    const { logUserIn, history } = this.props;

    if (email && password) {
      logUserIn(email);
      this.setState({ email: '', password: '' });
      history.push('/carteira');
    }
  }

  render() {
    const { email, password } = this.state;

    let disableButton = true;
    if (email && password) disableButton = false;

    return (
      <form onSubmit={ this.handleSubmission }>
        <label htmlFor="email">
          Email
          <input
            id="email"
            type="text"
            name="email"
            onChange={ (e) => this.handleEmailChange(e.target.value) }
            data-testid="email-input"
          />
        </label>

        <label htmlFor="password">
          Password
          <input
            id="password"
            type="password"
            name="password"
            onChange={ (e) => this.handlePasswordChange(e.target.value) }
            data-testid="password-input"
          />
        </label>

        <input type="submit" value="Entrar" disabled={ disableButton } />
      </form>
    );
  }
}

Login.propTypes = {
  logUserIn: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  logUserIn: (email) => dispatch(userLoggedIn(email)),
});

export default connect(null, mapDispatchToProps)(Login);
