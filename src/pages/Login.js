import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import trybeLogo from '../img/trybe-logo.png';
import { getEmail } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loginEmail: '',
      loginPassword: '',
      buttonDisable: true,
      emailValidation: false,
      passwordValidation: false,
    };

    this.changePage = this.changePage.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.validationEmail = this.validationEmail.bind(this);
    this.validationPassword = this.validationPassword.bind(this);
  }

  validationButton() {
    const { emailValidation, passwordValidation } = this.state;
    if (emailValidation && passwordValidation) {
      this.setState(() => ({ buttonDisable: false }));
    } else this.setState(() => ({ buttonDisable: true }));
  }

  validationEmail(emailValue) {
    const match = emailValue.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
    if (match) {
      this.setState(() => ({ emailValidation: true }), this.validationButton);
    } else this.setState(() => ({ emailValidation: false }), this.validationButton);
  }

  validationPassword(passwordValue) {
    const minNumber = 6;
    if (passwordValue.length >= minNumber) {
      this.setState(() => ({ passwordValidation: true }), this.validationButton);
    } else this.setState(() => ({ passwordValidation: false }), this.validationButton);
  }

  handleChange({ target: { name, value } }) {
    this.setState(() => ({ [name]: value }));
    if (name === 'loginEmail') this.validationEmail(value);
    if (name === 'loginPassword') this.validationPassword(value);
  }

  inputsLogin() {
    const { loginEmail, loginPassword } = this.state;
    return (
      <>
        <label htmlFor="login-email">
          Email:
          <input
            onChange={ this.handleChange }
            value={ loginEmail }
            type="text"
            name="loginEmail"
            id="login-email"
            data-testid="email-input"
          />
        </label>
        <label htmlFor="login-password">
          Senha:
          <input
            onChange={ this.handleChange }
            value={ loginPassword }
            type="password"
            name="loginPassword"
            id="login-password"
            data-testid="password-input"
          />
        </label>
      </>
    );
  }

  changePage() {
    const { history, dispatchEmail } = this.props;
    const { loginEmail } = this.state;
    dispatchEmail(loginEmail);
    history.push('/carteira');
  }

  render() {
    const { buttonDisable } = this.state;
    return (
      <>
        <img style={ { width: '200px' } } src={ trybeLogo } alt="Trybe Logo" />
        <form>
          {this.inputsLogin()}
          <button
            disabled={ buttonDisable }
            type="button"
            onClick={ this.changePage }
          >
            Entrar
          </button>
        </form>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatchEmail: (payload) => dispatch(getEmail(payload)),
});

Login.propTypes = {
  history: PropTypes.object,
}.isRequired;

export default connect(null, mapDispatchToProps)(Login);
