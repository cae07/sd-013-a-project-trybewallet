import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setLogin } from '../actions';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      initialEmail: false,
      password: '',
      initialPassword: false,
    };
    this.disabledButton = this.disabledButton.bind(this);
    this.emailValidation = this.emailValidation.bind(this);
    this.validatorPassword = this.validatorPassword.bind(this);
  }

  disabledButton() {
    const clickButton = document.querySelector('.btn');
    const { initialEmail, initialPassword } = this.state;
    if ((initialEmail) && (initialPassword)) {
      clickButton.removeAttribute('disabled');
    } else {
      clickButton.setAttribute('disabled', '');
    }
  }

  emailValidation({ currentTarget }) {
    const email = currentTarget;
    const regexEmail = /^\w+(\[\+\.-\]?\w)*@\w+(\[\.-\]?\w+)*\.[a-z]+$/i;
    const testValue = regexEmail.test(email.value);
    if (testValue) {
      this.setState({
        initialEmail: true,
      });
    }
    this.disabledButton();
  }

  validatorPassword({ currentTarget }) {
    const passwordValidator = currentTarget;
    const regexPassword = /^[0-9]{5,}$/i;
    const testValue = regexPassword.test(passwordValidator.value);
    if (testValue) {
      this.setState({
        initialPassword: true,
      });
    }
    this.disabledButton();
  }

  handleClick() {
    // const { history, dispatchSetValue } = this.props;
    // dispatchSetValue(this.state);
    // history.push('/');
    console.log('ativo');
  }

  render() {
    return (
      <section>
        <form>
          <label htmlFor="email-input">
            <input
              type="text"
              required
              placeholder="Email"
              onChange={ this.emailValidation }
              data-testid="email-input"
            />
          </label>
          <label htmlFor="password-input">
            <input
              type="password"
              data-testid="password-input"
              placeholder="Enter your password"
              required
              onChange={ this.validatorPassword }
            />
          </label>
          <button
            className="btn"
            type="submit"
            onClick={ this.handleClick }
            disabled
          >
            Entrar
          </button>
        </form>
      </section>
    );
  }
}

Login.propTypes = {
  dispatchSetValue: PropTypes.func,
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
}.isRequired;

const mapStateToProps = (state) => ({ inputLogin: state.user.inputLogin });
const mapDispatchToProps = (dispath) => ({
  dispathSetValue: (stateLogins) => dispath(setLogin(stateLogins)) });

export default connect(mapStateToProps, mapDispatchToProps)(Login);
