import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { emailAction } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loginEmail: '',
      loginPass: '',
      disabled: true,
    };
    this.loginValidation = this.loginValidation.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  loginValidation() {
    const { loginEmail, loginPass } = this.state;
    const express = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    const minPass = 6;
    const match = (express.test(loginEmail) && loginPass.length + 1 >= minPass);
    this.setState({ disabled: !match });
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
    this.loginValidation();
  }

  render() {
    const { loginEmail, loginPass, disabled } = this.state;
    const click = () => {
      const { login, history } = this.props;
      login(loginEmail);
      history.push('/carteira');
    };
    // const { email } = this.props;
    // console.log(this.state);
    // console.log(this.props);
    return (
      <form>
        <input
          onChange={ this.handleChange }
          name="loginEmail"
          type="email"
          data-testid="email-input"
          placeholder="email"
          value={ loginEmail }
        />
        <input
          onChange={ this.handleChange }
          name="loginPass"
          type="password"
          data-testid="password-input"
          placeholder="senha"
          value={ loginPass }
        />
        <button
          type="button"
          disabled={ disabled }
          onClick={ () => click() }
        >
          Entrar
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  login: (payload) => dispatch(emailAction(payload)),
});

Login.propTypes = {
  login: PropTypes.func,
}.isRequired;

export default connect(null, mapDispatchToProps)(Login);
