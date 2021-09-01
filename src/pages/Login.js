import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setPersonalInfo } from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      disable: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.loginIn = this.loginIn.bind(this);
    this.validadeLoginButton = this.validadeLoginButton.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    }, () => this.validadeLoginButton());
    // console.log(this.state);
  }

  validadeLoginButton() {
    const regex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
    const MIN_NUMBER = 6;
    const { email, password } = this.state;
    const disabled = !(regex.test(email) && password.length >= MIN_NUMBER);
    this.setState({ disable: disabled });
  }

  loginIn() {
    const { history, dispatchLogin } = this.props;

    const { email } = this.state;
    dispatchLogin(email);
    history.push('/carteira');
  }

  render() {
    const { email, password, disable } = this.state;
    return (
      <div>
        <form>
          <h1>Login</h1>
          <label htmlFor="email">
            Email:
            <input
              id="email"
              data-testid="email-input"
              type="text"
              value={ email }
              onChange={ this.handleChange }
              name="email"
              required
            />
          </label>
          <label htmlFor="password">
            Password:
            <input
              id="password"
              data-testid="password-input"
              type="password"
              value={ password }
              onChange={ this.handleChange }
              name="password"
              required
            />
          </label>
          <button
            type="button"
            onClick={ this.loginIn }
            disabled={ disable }
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  dispatchLogin: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

const mapDispatchToPros = (dispatch) => ({
  dispatchLogin: (email) => dispatch(setPersonalInfo(email)),
});

export default connect(null, mapDispatchToPros)(Login);
