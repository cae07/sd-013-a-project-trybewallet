import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Input from '../components/Input';
import { loginAction } from '../actions';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      buttonStatus: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.activateButton = this.activateButton.bind(this);
    this.accessWallet = this.accessWallet.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
    // const ONE_SECOND_HALF = 100;
    // setTimeout(this.activateButton, ONE_SECOND_HALF);
    this.activateButton();
  }

  activateButton() {
    const { email, password } = this.state;
    const PASSWORD_LENGTH = 5;
    const REGEX_EMAIL = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
    if (REGEX_EMAIL.exec(email)
    && password.length >= PASSWORD_LENGTH) {
      return this.setState({
        buttonStatus: false,
      });
    }
    return this.setState({
      buttonStatus: true,
    });
  }

  accessWallet() {
    const { loginDispatch, history } = this.props;
    const { email } = this.state;
    loginDispatch(email);
    history.push('/carteira');
  }

  render() {
    const { email, password, buttonStatus } = this.state;
    return (
      <section>
        <Input
          dataTest="email-input"
          name="email"
          value={ email }
          handleChange={ this.handleChange }
        />
        <Input
          dataTest="password-input"
          name="password"
          value={ password }
          handleChange={ this.handleChange }
        />
        <button
          type="button"
          disabled={ buttonStatus }
          onClick={ () => this.accessWallet() }
        >
          Entrar
        </button>
      </section>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  loginDispatch: (email) => dispatch(loginAction(email)),
});

Login.propTypes = {
  loginDispatch: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
