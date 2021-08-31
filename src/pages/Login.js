import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import setUserEmail from '../actions/index';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      isEmailValid: false,
      isPasswordValid: false,
      hasError: false,
    };

    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
    this.validatePassword = this.validatePassword.bind(this);
    this.submitLogin = this.submitLogin.bind(this);
  }

  handleChangeEmail(event) {
    this.validateEmail(event.target.value);

    this.setState({
      email: event.target.value,
    });
  }

  handleChangePassword(event) {
    this.validatePassword(event.target.value);

    this.setState({
      password: event.target.value,
    });
  }

  validateEmail(email) {
    const regex = /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,15}$/;
    // retirado do site https://stackoverflow.com/questions/4964691/super-simple-email-validation-with-javascript

    this.setState({
      isEmailValid: regex.test(email),
    });
  }

  validatePassword(password) {
    const PASSWORD_LENGTH = 6;
    this.setState({
      isPasswordValid: password.length >= PASSWORD_LENGTH,
    });
  }

  submitLogin(event) {
    event.preventDefault();

    const { history, setEmail } = this.props;
    const { email, isEmailValid, isPasswordValid } = this.state;
    const isInvalid = !isEmailValid || !isPasswordValid;

    this.setState({
      hasError: false,
    });

    if (isInvalid) {
      this.setState({
        hasError: true,
      });

      return;
    }

    setEmail(email);
    history.push('/carteira');
  }

  render() {
    const { email, password, isEmailValid, isPasswordValid, hasError } = this.state;
    const isDisabled = !isEmailValid || !isPasswordValid;

    return (
      <div>
        <h1>Login</h1>

        <form onSubmit={ this.submitLogin }>
          <input
            value={ email }
            type="email"
            name="user-email"
            id="user-email"
            placeholder="Insira seu email"
            data-testid="email-input"
            onChange={ this.handleChangeEmail }
          />

          {/* { !isEmailValid && !!email && !!password && <p>Email não é válido</p> } */ }

          <input
            value={ password }
            type="password"
            name="user-password"
            id="user-password"
            data-testid="password-input"
            onChange={ this.handleChangePassword }
          />

          {/* { !isPasswordValid && !!password && !!email && <p>msg</p> } */ }

          {/* { hasError && !isPasswordValid && <p>Por favor, verifique sua senha.</p> }
          { hasError && !isEmailValid && <p>Por favor, verifique seu email.</p> } */}
          { hasError && <p>Por favor, verifique seu email ou senha.</p> }

          <button type="submit" disabled={ isDisabled }>Entrar</button>
        </form>
      </div>
    );
  }
}

// const mapStateToProps = (state) => ({ getUserEmail: state.userReducer.user.email });

const mapDispatchToProps = (dispatch) => ({
  setEmail: (userEmail) => dispatch(setUserEmail(userEmail)),
});

Login.propTypes = {
  setEmail: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
