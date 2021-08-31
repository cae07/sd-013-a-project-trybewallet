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
      user: {
        email: '',
        password: '',
      },
      authenticated: false,
    };
    this.validateEmail = this.validateEmail.bind(this);
    this.validatePassword = this.validatePassword.bind(this);
    this.formSubmit = this.formSubmit.bind(this);
  }

  validateEmail({ target }) {
    const { user } = this.state;
    const { value } = target;
    // Obg Gessé pelo Regex maroto!@S+
    const regex = /\S+@\S+\.\S+/;
    if (regex.test(value)) {
      return this.setState({
        invalidEmail: false,
        user: { ...user, email: value },
      });
    } return this.setState({
      invalidEmail: true,
      user: { ...user, email: value },
    });
  }

  validatePassword({ target }) {
    const { user } = this.state;
    const { value } = target;
    const MIN_LENGTH_PASSWORD = 6;
    if (value.length >= MIN_LENGTH_PASSWORD) {
      return this.setState({
        invalidPassword: false,
        user: { ...user, password: value },
      });
    } return this.setState({
      invalidPassword: true,
      user: { ...user, password: value },
    });
  }

  formSubmit(e) {
    e.preventDefault();
    const { user: { email, password } } = this.state;
    const { submitUser } = this.props;
    submitUser(({ email, password }));
    this.setState({ authenticated: true });
  }

  render() {
    const { invalidPassword, invalidEmail, authenticated } = this.state;
    if (authenticated) return <Redirect to="/carteira" />;
    return (
      <form onSubmit={ this.formSubmit }>
        <label htmlFor="login">
          <input
            id="login"
            type="text"
            data-testid="email-input"
            placeholder="Email"
            onChange={ this.validateEmail }
            name="email"
          />
        </label>
        <label htmlFor="password">
          <input
            id="password"
            type="password"
            data-testid="password-input"
            placeholder="Senha"
            onChange={ this.validatePassword }
            name="password"
          />
        </label>
        <button
          type="submit"
          disabled={ invalidEmail || invalidPassword }
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
