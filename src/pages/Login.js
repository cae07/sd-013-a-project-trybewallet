import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { setLogin } from '../actions';
import './Login.css';
import img from '../logo.gif'; // linha 46

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.onSubmitLogin = this.onSubmitLogin.bind(this);
  }

  onSubmitLogin() {
    const { dispatchSetLogin } = this.props;
    dispatchSetLogin(this.state);
  }

  validLogin(email, password) {
    const tamPass = 6;
    const valid = email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
    if (!valid || password.length < tamPass) {
      return true;
    }
    return false;
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { email, password } = this.state;
    return (
      <div>
        <fieldset id="login-countainer">
          <img id="img-login" src={ img } alt="logo" />
          <div id="input-container">
            <label htmlFor="email-input">
              Email:
              <input
                placeholder="alguem@alguem"
                id="email-input"
                type="text"
                data-testid="email-input"
                name="email"
                onChange={ this.handleChange }
              />
            </label>
            <label htmlFor="password-input">
              Senha:
              <input
                id="password-input"
                type="text"
                data-testid="password-input"
                name="password"
                onChange={ this.handleChange }
              />
            </label>
          </div>
          <Link to="/carteira" id="link-login">
            <button
              id="button-login"
              type="button"
              disabled={ this.validLogin(email, password) }
              onClick={ this.onSubmitLogin }
            >
              Entrar
            </button>
          </Link>
        </fieldset>
      </div>
    );
  }
}

Login.propTypes = {
  dispatchSetLogin: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  dispatchSetLogin: ({ email }) => dispatch(setLogin(email)),
});

export default connect(null, mapDispatchToProps)(Login);
