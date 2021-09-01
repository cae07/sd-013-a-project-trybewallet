import React from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';

class Login extends React.Component {
  constructor() {
    super();
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
    // console.log(this.state);
    // console.log(email);
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
        <button type="button" disabled={ disabled }>Entrar</button>
      </form>
    );
  }
}
const mapStateToProps = (state) => ({ email: state.email });

/* Login.propTypes = {
  email: PropTypes.string,
};

Login.defaultProps = {
  email: '',
}; */

export default connect(mapStateToProps)(Login);
