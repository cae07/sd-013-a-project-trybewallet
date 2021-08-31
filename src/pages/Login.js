import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { sendUserInfo } from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      invalidEmail: true,
      invalidPassowrd: true,
      user: {
        email: '',
        password: '',
      },
      shouldRedirect: false,
    };
    this.validateEmail = this.validateEmail.bind(this);
    this.validatePassoword = this.validatePassoword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    const { user: { email, password } } = this.state;
    const { submitUser } = this.props;
    submitUser(({ email, password }));
    this.setState({ shouldRedirect: true });
  }

  validatePassoword({ target }) {
    const { value } = target;
    const { user } = this.state;
    const minLength = 6;
    if (value.length >= minLength) {
      return this.setState({
        invalidPassowrd: false,
        user: { ...user, password: value } });
    }
    return this.setState({
      invalidPassowrd: true,
      user: { ...user, password: value } });
  }

  validateEmail({ target }) {
    const { value } = target;
    const { user } = this.state;
    /* Regex, do meu mano Gessé */
    const regex = /\S+@\S+\.\S+/;
    if (regex.test(value)) {
      return this.setState({ invalidEmail: false, user: { ...user, email: value } });
    }
    return this.setState({ invalidEmail: true, user: { ...user, email: value } });
  }

  render() {
    const { invalidPassowrd, invalidEmail, shouldRedirect } = this.state;
    if (shouldRedirect) {
      return <Redirect to="/carteira" />;
    }
    return (
      <form className="form" onSubmit={ this.onSubmit }>
        <label htmlFor="label-email">
          Email:
          <input
            onChange={ this.validateEmail }
            name="email"
            type="email"
            data-testid="email-input"
          />
        </label>
        <label htmlFor="label-password">
          Senha:
          <input
            onChange={ this.validatePassoword }
            type="password"
            data-testid="password-input"
          />
        </label>
        <button
          disabled={ invalidPassowrd || invalidEmail }
          type="submit"
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
