import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import InputText from '../components/InpuText';
import LoginButton from '../components/LoginButton';
import { actionLogin } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      disabled: true,
      redirect: false,
    };
    this.onClick = this.onClick.bind(this);
    this.emailValidation = this.emailValidation.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    }, () => this.emailValidation());
  }

  onClick(event) {
    event.preventDefault();
    const { email } = this.state;
    const { login } = this.props;
    login(email);
    this.setState({ redirect: true });
  }

  emailValidation() {
    const { email, password } = this.state;
    const minPassword = 6;
    const isDisabled = !(/[\w]+@[\w]+.com/.test(email) && password.length >= minPassword);
    this.setState({ disabled: isDisabled });
  }

  render() {
    const { email, password, disabled, redirect } = this.state;

    return (
      <div className="loginForm">
        { redirect && <Redirect to="/carteira" /> }
        <form>
          <InputText
            testid="email-input"
            id="email"
            name="email"
            type="email"
            placeholder="E-mail"
            value={ email }
            onChange={ this.onChange }
          />
          <InputText
            testid="password-input"
            id="password"
            name="password"
            type="text"
            placeholder="Senha"
            value={ password }
            onChange={ this.onChange }
          />
          <LoginButton
            id="loginButton"
            onClick={ this.onClick }
            disabled={ disabled }
          />
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  login: (email) => dispatch(actionLogin(email)),
});

export default connect(null, mapDispatchToProps)(Login);
