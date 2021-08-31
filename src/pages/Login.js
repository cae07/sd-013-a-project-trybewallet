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
    };
    this.handleChange = this.handleChange.bind(this);
    this.loginIn = this.loginIn.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  loginIn() {
    const { history, dispatchLogin } = this.props;

    dispatchLogin(this.state);
    history.push('/carteira');
  }

  render() {
    const { email, password } = this.state;
    return (
      <div>
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
        <button type="button" onClick={ this.loginIn }>Entrar</button>
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
  dispatchLogin: (payload) => dispatch(setPersonalInfo(payload)),
});

export default connect(null, mapDispatchToPros)(Login);
