import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { sendUserInfo } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      invalidEmail: true,
      invalidPassword: true,
      email: '',
      password: '',
    };
    this.validateEmail = this.validateEmail.bind(this);
    this.validatePassword = this.validatePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  validateEmail({ target: { value } }) {
    const pattern = /\S+@\S+\.\S+/;
    if (pattern.test(value)) {
      return this.setState({ invalidEmail: false, email: value });
    }
    return this.setState({ invalidEmail: true, email: value });
  }

  validatePassword({ target: { value } }) {
    const MIN_LENGTH_PASSWORD = 6;
    if (value.length >= MIN_LENGTH_PASSWORD) {
      return this.setState({ invalidPassword: false, password: value });
    }
    return this.setState({ invalidPassword: true, password: value });
  }

  handleSubmit(e) {
    const { sendUserInfo } = this.props;
    const { email, password } = this.state;
    e.preventDefault();
    sendUserInfo(({ email, password }));
    this.setState({ shouldRedirect: true });
  }

  render() {
    const { validateEmail, validatePassword } = this;
    const { invalidEmail, invalidPassword, shouldRedirect } = this.state;

    if (shouldRedirect) {
      return <Redirect to="/carteira" />;
    }

    return (
      <main>
        <form onSubmit={ this.handleSubmit }>
          <label htmlFor="email">
            <input
              onChange={ validateEmail }
              placeholder="Insira seu e-mail"
              id="email"
              type="text"
              data-testid="email-input"
            />
          </label>
          <label htmlFor="password">
            <input
              onChange={ validatePassword }
              placeholder="******"
              id="password"
              type="password"
              data-testid="password-input"
            />
          </label>
          <button
            disabled={
              invalidEmail || invalidPassword
            }
            type="submit"
          >
            Entrar
          </button>
        </form>
      </main>
    );
  }
}

Login.propTypes = {
  sendUserInfo: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  sendUserInfo: (payload) => dispatch(sendUserInfo(payload)),
});

export default connect(null, mapDispatchToProps)(Login);
