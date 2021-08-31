import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { sendUserInfo } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      authEmail: true,
      authPassword: true,
      email: '',
      password: '',
      shouldRedirect: false,
    };
    this.validateEmail = this.validateEmail.bind(this);
    this.validatePassword = this.validatePassword.bind(this);
    this.formSubmit = this.formSubmit.bind(this);
  }

  formSubmit(event) {
    event.preventDefault();
    const { email, password } = this.state;
    const { submitUser } = this.props;
    submitUser(({ email, password }));
    this.setState({ shouldRedirect: true });
  }

  validateEmail({ target }) {
    const { value } = target;
    const regex = /\S+@\S+\.\S+/; // Gesse Turma 13A
    if (regex.test(value)) {
      return this.setState({
        authEmail: false,
        email: value,
      });
    }
    return this.setState({
      authEmail: true,
      email: value,
    });
  }

  validatePassword({ target }) {
    const { value } = target;
    const MIN_LENGTH_PASSWORD = 6;
    if (value.length >= MIN_LENGTH_PASSWORD) {
      return this.setState({
        authPassword: false,
        password: value,
      });
    }
    return this.setState({
      authPassword: true,
      password: value });
  }

  render() {
    const { authEmail, authPassword, shouldRedirect } = this.state;
    if (shouldRedirect) {
      return <Redirect to="/carteira" />;
    }
    return (
      <form className="forms" onSubmit={ this.formSubmit }>
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
          type="submit"
        >
          Entrar
        </button>
      </form>
    );
  }
}

Login.propTypes = {
  submitUser: PropTypes.func,
}.isRequired;

const mapDispachToProps = (dispatch) => ({
  submitUser: (payload) => dispatch(sendUserInfo(payload)),
});
export default connect(null, mapDispachToProps)(Login);
