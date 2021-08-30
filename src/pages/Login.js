import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { sendUserEmail } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      invalidEmail: true,
      invalidPassword: true,
      userEmail: '',
    };
    this.validateEmail = this.validateEmail.bind(this);
    this.validatePassword = this.validatePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  validateEmail({ target: { value } }) {
    const pattern = /\S+@\S+\.\S+/;
    if (pattern.test(value)) {
      return this.setState({ invalidEmail: false, userEmail: value });
    }
    return this.setState({ invalidEmail: true, userEmail: value });
  }

  validatePassword({ target: { value } }) {
    const MIN_LENGTH_PASSWORD = 6;
    if (value.length >= MIN_LENGTH_PASSWORD) this.setState({ invalidPassword: false });
  }

  handleSubmit(e) {
    const { sendEmail } = this.props;
    const { userEmail } = this.state;
    e.preventDefault();
    sendEmail(userEmail);
    this.setState({ shouldRedirect: true });
  }

  render() {
    const { validateEmail, validatePassword } = this;
    const { invalidEmail, invalidPassword, shouldRedirect } = this.state;

    if (shouldRedirect) {
      return <Redirect to="/carteira" />;
    }

    return (
      <div>
        <form onSubmit={ this.handleSubmit }>
          <label htmlFor="email">
            <input
              onChange={ validateEmail }
              placeholder="Insira seu e-mail"
              id="email"
              type="text"
              data-testid="email-input"
            />
          </label>
          <label htmlFor="password">
            <input
              onChange={ validatePassword }
              placeholder="******"
              id="password"
              type="password"
              data-testid="password-input"
            />
          </label>
          <button
            disabled={
              invalidEmail || invalidPassword
            }
            type="submit"
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  sendEmail: (payload) => dispatch(sendUserEmail(payload)),
});

export default connect(null, mapDispatchToProps)(Login);
