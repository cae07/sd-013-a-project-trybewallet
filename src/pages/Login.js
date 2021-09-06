import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Input from '../components/Input';
import Button from '../components/Button';
import { saveEmailAction } from '../actions';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
    this.validatePassword = this.validatePassword.bind(this);
  }

  handleChange(e) {
    const { target: { name, value } } = e;
    this.setState({ [name]: value });
  }

  handleClick() {
    const { changeEmail, history } = this.props;
    changeEmail(this.state);
    history.push('/carteira');
  }

  // Email validation reference: Aline Hoshino's code
  validateEmail() {
    const { email } = this.state;
    const regex = /\S+@\S+\.\S+/;
    return regex.test(email);
  }

  validatePassword() {
    const { password } = this.state;
    const passwordMinLength = 6;
    return password.length >= passwordMinLength;
  }

  render() {
    const { handleChange, handleClick, validateEmail, validatePassword } = this;
    const { email, password } = this.state;

    return (
      <div>
        Login
        <fieldset>
          <Input
            dataTestid="email-input"
            name="email"
            onChange={ handleChange }
            placeholder="Email"
            type="text"
            value={ email }
          />

          <Input
            dataTestid="password-input"
            name="password"
            onChange={ handleChange }
            placeholder="Senha"
            type="password"
            value={ password }
          />

          <Button
            buttonText="Entrar"
            disabled={ !(validateEmail() && validatePassword()) }
            onClick={ handleClick }
          />
        </fieldset>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  changeEmail: (state) => dispatch(saveEmailAction(state)),
});

Login.propTypes = {
  changeEmail: PropTypes.func,
  history: PropTypes.shape(),
}.isRequired;

export default connect(null, mapDispatchToProps)(Login);
