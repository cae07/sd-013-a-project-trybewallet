import PropTypes from 'prop-types';
import React from 'react';
import '../App.css';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { sendUserInfo } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      invalidEmail: true,
      invalidPassword: true,
      user: {
        email: '',
        password: '',
      },
      shouldRedirect: false,
    };

    this.validateEmail = this.validateEmail.bind(this);
    this.validatePassword = this.validatePassword.bind(this);
    this.formSubmit = this.formSubmit.bind(this);
  }

  validateEmail({ target }) {
    const { value } = target;
    const { user } = this.state;
    const regex = /\S+@\S+\.\S+/; // regex sugerido pelo gessé
    if (regex.test(value)) {
      return this.setState({
        invalidEmail: false,
        user: { ...user, email: value },
      });
    }
    return this.setState({
      invalidEmail: true,
      user: { ...user, email: value },
    });
  }

  validatePassword({ target }) {
    const { value } = target;
    const { user } = this.state;
    const MIN_LENGTH_PASSWORD = 6;
    if (value.length >= MIN_LENGTH_PASSWORD) {
      return this.setState({
        invalidPassword: false,
        user: { ...user, password: value },
      });
    }
    return this.setState({
      invalidPassword: true,
      user: { ...user, password: value },
    });
  }

  formSubmit(e) {
    e.preventDefault();
    const { user: { email, password } } = this.state;
    const { submitUser } = this.props;

    submitUser(({ email, password }));
    this.setState({ shouldRedirect: true });
  }

  render() {
    const { invalidEmail, invalidPassword, shouldRedirect } = this.state;
    if (shouldRedirect) {
      return <Redirect to="/carteira" />;
    }
    return (
      <form
        className="login-form"
        onSubmit={ this.formSubmit }
      >
        <label htmlFor="login">
          <input
            onChange={ this.validateEmail }
            id="login"
            type="email"
            name="email"
            placeholder="Email"
            data-testid="email-input"
          />
        </label>
        <label htmlFor="password">
          <input
            onChange={ this.validatePassword }
            id="password"
            type="password"
            name="password"
            placeholder="******"
            data-testid="password-input"
          />
        </label>
        <button
          type="submit"
          disabled={
            invalidEmail || invalidPassword
          }
        >
          Entrar
        </button>
      </form>
    );
  }
}

Login.propTypes = {
  submitUser: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  submitUser: (user) => dispatch(sendUserInfo(user)),
});

export default connect(null, mapDispatchToProps)(Login);
