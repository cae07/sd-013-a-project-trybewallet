import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import LoginInputs from '../components/loginInput';
import actionUser from '../actions/index';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      disable: true,
      checkEmail: false,
      checkPassword: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
    this.validatePassword = this.validatePassword.bind(this);
    this.validateLogin = this.validateLogin.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
    if (name === 'email') this.validateEmail(value);
    if (name === 'password') this.validatePassword(value);
  }

  validateEmail(email) {
    if (email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      this.setState({ checkEmail: true }, () => this.validateLogin());
    } else this.setState({ checkEmail: false }, () => this.validateLogin());
  }

  validatePassword(password) {
    const minLength = 6;
    if (password.length >= minLength) {
      this.setState({ checkPassword: true }, () => this.validateLogin());
    } else this.setState({ checkPassword: false }, () => this.validateLogin());
  }

  validateLogin() {
    const { checkEmail, checkPassword } = this.state;
    return checkEmail && checkPassword
      ? this.setState({ disable: false }) : this.setState({ disable: true });
  }

  handleSubmit() {
    const { handleLogin, history } = this.props;
    const { email } = this.state;
    handleLogin(email);
    history.push('/carteira');
  }

  render() {
    const { email, password, disable } = this.state;

    return (
      <LoginInputs
        email={ email }
        password={ password }
        handleChange={ this.handleChange }
        handleSubmit={ this.handleSubmit }
        disable={ disable }
      />
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  handleLogin: (payload) => dispatch(actionUser(payload)),
});

Login.propTypes = {
  handleLogin: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
