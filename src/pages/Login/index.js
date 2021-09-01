import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { sendUserInfo } from '../../actions';
import { Input } from '../../components';
import { validateEmail, validatePassword } from './utils';
import { Form, Main } from './styles';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      invalidEmail: true,
      invalidPassword: true,
      email: '',
      password: '',
    };
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderForm = this.renderForm.bind(this);
  }

  handleEmail({ target: { value } }) {
    return validateEmail(value)
      ? this.setState({ invalidEmail: false, email: value })
      : this.setState({ invalidEmail: true, email: value });
  }

  handlePassword({ target: { value } }) {
    return validatePassword(value)
      ? this.setState({ invalidPassword: false, password: value })
      : this.setState({ invalidPassword: true, password: value });
  }

  handleSubmit(e) {
    const { sendUserInfoToStore } = this.props;
    const { email, password } = this.state;
    e.preventDefault();
    sendUserInfoToStore(({ email, password }));
    this.setState({ shouldRedirect: true });
  }

  renderForm() {
    const { handleEmail, handlePassword } = this;
    const { invalidEmail, invalidPassword } = this.state;
    return (
      <Main>
        <Form onSubmit={ this.handleSubmit }>
          <Input
            id="email"
            testId="email-input"
            placeholder="Insira seu e-mail"
            onChange={ handleEmail }
          />
          <Input
            id="password"
            testId="password-input"
            placeholder="Insira sua senha"
            onChange={ handlePassword }
            type="password"
          />
          <button
            disabled={
              invalidEmail || invalidPassword
            }
            type="submit"
          >
            Entrar
          </button>
        </Form>
      </Main>
    );
  }

  render() {
    const { shouldRedirect } = this.state;
    return shouldRedirect
      ? <Redirect to="/carteira" />
      : this.renderForm();
  }
}

Login.propTypes = {
  sendUserInfoToStore: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  sendUserInfoToStore: (payload) => dispatch(sendUserInfo(payload)),
});

export default connect(null, mapDispatchToProps)(Login);
