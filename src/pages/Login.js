import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { infoUsers } from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      initialEmail: false,
      password: '',
      initialPassword: false,
    };
    this.activateButtonClick = this.activateButtonClick.bind(this);
    this.emailValidator = this.emailValidator.bind(this);
    this.passwordValidator = this.passwordValidator.bind(this);
  }

  activateButtonClick() {
    const buttonInfo = document.querySelector('.btn');
    const { initialEmail, initialPassword } = this.state;
    if ((initialEmail) && (initialPassword)) {
      buttonInfo.removeAttribute('disabled');
    } else {
      buttonInfo.setAttribute('disabled', '');
    }
  }

  emailValidator({ currentTarget }) {
    const emailTarget = currentTarget;
    const emailRegexValidation = /^\w+(\[\+\.-\]?\w)*@\w+(\[\.-\]?\w+)*\.[a-z]+$/i;
    const testInfo = emailRegexValidation.test(emailTarget.value);
    if (testInfo) {
      this.setState({
        initialEmail: true,
      });
    }
    this.activateButtonClick();
  }

  passwordValidator({ currentTarget }) {
    const passwordTarget = currentTarget;
    const passwordRegexValidation = /^[0-9]{5,}$/i;
    const testInfo = passwordRegexValidation.test(passwordTarget.value);
    if (testInfo) {
      this.setState({
        initialPassword: true,
      });
    }
    this.activateButtonClick();
  }

  handleClick() {
    const { history, dispathSetValue } = this.props;
    dispathSetValue(this.state);
    history.push('/');
    // console.log('ativo');
  }

  render() {
    return (
      <section>
        <form>
          <label htmlFor="email-input">
            <input
              data-testid="email-input"
              type="email"
              placeholder="Email"
              required
              autoComplete="off"
              onChange={ this.emailValidator }
            />
          </label>
          <label htmlFor="password-input">
            <input
              data-testid="password-input"
              type="password"
              placeholder="Password"
              required
              autoComplete="off"
              onChange={ this.passwordValidator }
            />
          </label>
          <button
            type="submit"
            onClick={
              this.handleClick
            }
            className="btn"
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
  dispathSetValue: PropTypes.func,
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
}.isRequired;

const mapStateToProps = (state) => ({
  login: state.user.login,
});

const mapDispatchToProps = (dispath) => ({
  dispathSetValue: (localLogin) => dispath(infoUsers(localLogin)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
