import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import bitcoinGif from '../images/bitcoin.gif';
import { getUserEmail } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      buttonDisable: true,
      checkEmail: false,
      checkPassword: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.renderInputs = this.renderInputs.bind(this);
    this.validateLogin = this.validateLogin.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
    this.validatePassword = this.validatePassword.bind(this);
    this.changePage = this.changePage.bind(this);
  }

  validateEmail(email) {
    if (email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      this.setState({ checkEmail: true }, () => this.validateLogin());
    } else this.setState({ checkEmail: false }, () => this.validateLogin());
  }

  validatePassword(password) {
    const minimumLength = 6;
    if (password.length >= minimumLength) {
      this.setState({ checkPassword: true }, () => this.validateLogin());
    } else this.setState({ checkPassword: false }, () => this.validateLogin());
  }

  validateLogin() {
    const { checkEmail, checkPassword } = this.state;
    return checkEmail && checkPassword
      ? this.setState({ buttonDisable: false }) : this.setState({ buttonDisable: true });
  }

  handleChange({ target }) {
    const { id, value } = target;

    this.setState({ [id]: value });

    if (id === 'email') this.validateEmail(value);
    if (id === 'password') this.validatePassword(value);
  }

  changePage() {
    const { history, storeEmail } = this.props;
    const { email } = this.state;
    storeEmail(email);
    history.push('/carteira');
  }

  renderInputs() {
    const { email, password } = this.state;
    return (
      <>
        <label htmlFor="email">
          Email:
          <input
            data-testid="email-input"
            value={ email }
            id="email"
            type="email"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="password">
          Senha:
          <input
            data-testid="password-input"
            value={ password }
            id="password"
            type="password"
            onChange={ this.handleChange }
          />
        </label>
      </>);
  }

  render() {
    const { buttonDisable } = this.state;
    return (
      <>
        <h1>Trybe Wallet</h1>
        <img src={ bitcoinGif } alt="bitcoin gif" />
        <form>
          {this.renderInputs()}
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
  storeEmail: (payload) => dispatch(getUserEmail(payload)),
});

Login.propTypes = {
  history: PropTypes.object,
}.isRequired;

export default connect(null, mapDispatchToProps)(Login);
