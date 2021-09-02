import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { setLogin } from '../actions';
import './login.css';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      statusEmail: false,
      statusPassword: false,
    };
    this.emailValidation = this.emailValidation.bind(this);
    this.passwordValidation = this.passwordValidation.bind(this);
    this.disabledButton = this.disabledButton.bind(this);
  }

  onSubmitForm() {
    const { history, dispatchSetValue } = this.props;
    dispatchSetValue(this.state);
    history.push('/');
  }

  disabledButton() {
    const { statusEmail, statusPassword } = this.state;
    const button = document.querySelector('.submit-button');
    if ((statusEmail) && (statusPassword)) {
      button.removeAttribute('disabled');
    } else {
      button.setAttribute('disabled', '');
    }
  }

  emailValidation({ currentTarget }) {
    const input = currentTarget;
    const regex = /^\w+(\[\+\.-\]?\w)*@\w+(\[\.-\]?\w+)*\.[a-z]+$/i;
    const emailTest = regex.test(input.value);
    if (emailTest) this.setState({ statusEmail: true });
    this.disabledButton();
  }

  passwordValidation({ currentTarget }) {
    const input = currentTarget;
    const regex = /^[0-9]{5,}$/i;
    const passwordTest = regex.test(input.value);
    if (passwordTest) this.setState({ statusPassword: true });
    this.disabledButton();
  }

  render() {
    return (
      <section className="login-section">
        <form>
          <label htmlFor="email-input">
            <input
              type="email"
              className="email-input"
              data-testid="email-input"
              placeholder="Email"
              required
              autoComplete="off"
              onChange={ this.emailValidation }
            />
          </label>
          <label htmlFor="password-input">
            <input
              type="password"
              data-testid="password-input"
              placeholder="Senha"
              required
              autoComplete="off"
              onChange={ this.passwordValidation }
            />
          </label>
          <button
            type="submit"
            className="submit-button"
            onClick={ this.onSubmitForm }
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

const mapDispatchToProps = (dispath) => ({
  dispathSetValue: (localStateLogin) => dispath(setLogin(localStateLogin)),
});

const mapStateToProps = (state) => ({ newInputs: state.user.newInputs });

export default connect(mapStateToProps, mapDispatchToProps)(Login);
