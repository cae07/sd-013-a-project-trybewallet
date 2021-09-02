import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { signIn } from '../actions';
import '../style/Login.css';
import '../style/Button.css';

function validateEmail(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}

function validatePassword(password) {
  const minLength = 6;
  return (password.length >= minLength);
}

class Login extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.checkLogin = this.checkLogin.bind(this);
    this.submitLogin = this.submitLogin.bind(this);

    this.state = {
      disabledButton: true,
      email: '',
      password: '',
    };
  }

  checkLogin() {
    const { email, password } = this.state;
    if (validateEmail(email) && validatePassword(password)) {
      this.setState({ disabledButton: false });
    } else {
      this.setState({ disabledButton: true });
    }
  }

  handleChange({ target }) {
    const { value, name } = target;
    this.setState({
      [name]: value,
    }, () => this.checkLogin());
  }

  submitLogin(e) {
    e.preventDefault();
    const { email } = this.state;
    const { saveUser, history } = this.props;
    saveUser(email);
    history.push('/carteira');
  }

  render() {
    const { disabledButton } = this.state;
    return (
      <div className="login-container">
        <form className="login-form" autoComplete="off">
          <h1>WALLET</h1>
          <img src="https://i.imgur.com/K5eEoXI.png" alt="wallet logo" />
          <div className="login-input-container">
            <label className="labe-email" htmlFor="email">
              <input
                data-testid="email-input"
                name="email"
                type="email"
                placeholder="Type your email"
                onChange={ this.handleChange }
              />
            </label>
            <label htmlFor="password">
              <input
                data-testid="password-input"
                name="password"
                type="password"
                placeholder="Type your password"
                onChange={ this.handleChange }
              />
            </label>
          </div>
          <button
            className="btn-login"
            disabled={ disabledButton }
            type="submit"
            onClick={ this.submitLogin }
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  saveUser: (email) => dispatch(signIn(email)),
});

Login.propTypes = {
  saveUser: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
