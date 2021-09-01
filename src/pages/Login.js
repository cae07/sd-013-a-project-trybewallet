import React, { Component } from 'react';
import './login.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setUser } from '../actions';
import { LoginInput, PasswordInput } from '../components';

class Login extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      loginValid: false,
      passwordValid: false,
    };
    this.validateLogin = this.validateLogin.bind(this);
    this.validatePassword = this.validatePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  validateLogin({ target }) {
    const { name, value } = target;
    const isValid = /^([\w.%+-]+)@([\w-]+.)+([\w]{2,})$/i;
    this.setState({ [name]: value });
    if (isValid.test(value)) {
      return this.setState({ loginValid: true });
    }
    return this.setState({ loginValid: false });
  }

  validatePassword({ target }) {
    const { name, value } = target;
    const MIN_SIZE = 6;
    this.setState({ [name]: value });
    if (value.length >= MIN_SIZE) {
      return this.setState({ passwordValid: true });
    }
    return this.setState({ passwordValid: false });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { history, dispatchValue } = this.props;
    dispatchValue(this.state);
    history.push('/carteira');
  }

  render() {
    const { loginValid, passwordValid, email, password } = this.state;

    return (
      <main className="login-screen">
        <form action="" className="login-form">
          <LoginInput func={ this.validateLogin } login={ email } />
          <PasswordInput func={ this.validatePassword } pass={ password } />
          <button
            type="submit"
            className="btn-form"
            disabled={ !loginValid || !passwordValid }
            onClick={ this.handleSubmit }
          >
            Entrar
          </button>
        </form>
      </main>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatchValue: (ValueAndName) => dispatch(setUser(ValueAndName)),
});

Login.propTypes = {
  history: PropTypes.arrayOf(Object),
  dispatchValue: PropTypes.func,
}.isRequired;

export default connect(null, mapDispatchToProps)(Login);
