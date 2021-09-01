import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
  }

  loginValidate() {
    const { email, password } = this.state;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^[a-zA-Z0-9]{6,}$/;
    // if ((password.length >= '6') && (email.includes('@')) && (email.includes('.com')))
    if (emailRegex.test(email) && passwordRegex.test(password)) {
      return false;
    }
    return true;
  }

  render() {
    const { email, password } = this.state;
    const { setEmailDispatch } = this.props;
    return (
      <>
        <form action="">
          <label htmlFor="email-input">
            <p>Email:</p>
            <input
              type="email"
              id="email-input"
              placeholder="email"
              // pattern="/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"
              onChange={ (e) => this.setState({ email: e.target.value }) }
              value={ email }
              data-testid="email-input"
              required
            />
          </label>
          <label htmlFor="password-input">
            <p>Senha:</p>
            <input
              type="password"
              id="password-input"
              placeholder="senha"
              minLength="6"
              onChange={ (e) => this.setState({ password: e.target.value }) }
              value={ password }
              required
              data-testid="password-input"
            />
          </label>
          <br />
          <Link to="/carteira">
            <button
              type="button"
              id="button-login"
              disabled={ this.loginValidate() }
              onClick={ () => setEmailDispatch(email) }
            >
              Entrar
            </button>
          </Link>
        </form>

        {/* <input type="button" value="Entrar" /> */}
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setEmailDispatch: (email) => dispatch(login(email)),
});

Login.propTypes = {
  setEmailDispatch: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
