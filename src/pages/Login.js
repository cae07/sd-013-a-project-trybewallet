// React
import React from 'react';
import { Redirect } from 'react-router-dom';

// PropTypes
import PropTypes from 'prop-types';

// Redux
import { connect } from 'react-redux';
import { setEmail } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // Email inserido no input
      emailInput: '',
      // Senha inserida no input
      passwordInput: '',
      redirect: false,
    };

    this.dispatchEmail = this.dispatchEmail.bind(this);
    this.setLogin = this.setLogin.bind(this);
  }

  setLogin({ target: { value, id } }) {
    const key = id === 'email' ? 'emailInput' : 'passwordInput';

    this.setState((previous) => ({
      ...previous,
      [key]: value,
    }));
  }

  dispatchEmail() {
    const { props: { setEmailDispatcher } } = this;
    setEmailDispatcher(this.state);
    this.setState((previous) => ({ ...previous, redirect: true }));
  }

  validate(email, password) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^[a-zA-Z0-9]{6,}$/;
    return (
      emailRegex.test(email) && passwordRegex.test(password)
    );
  }

  renderLoginForm() {
    const { state: { emailInput, passwordInput } } = this;
    return (
      <form className="Login">
        <fieldset className="form-group">
          <legend>Login</legend>
          { /* Input Login */ }
          <label htmlFor="email">
            Email:
            <input
              type="email"
              id="email"
              className="form-control"
              placeholder="Email"
              data-testid="email-input"
              value={ emailInput }
              onChange={ (evt) => this.setLogin(evt) }
            />
          </label>
          <br />
          { /* Input Senha */ }
          <label htmlFor="password">
            Senha:
            <input
              type="password"
              id="password"
              className="form-control"
              placeholder="Senha"
              data-testid="password-input"
              value={ passwordInput }
              onChange={ (evt) => this.setLogin(evt) }
            />
          </label>
        </fieldset>
        { /* Botão Submit */ }
        <button
          type="button"
          className="btn btn-primary"
          onClick={ () => this.dispatchEmail(this.state) }
          disabled={ !this.validate(emailInput, passwordInput) }
        >
          Entrar
        </button>
      </form>
    );
  }

  render() {
    const { state: { redirect } } = this;
    return redirect ? <Redirect to="/carteira" /> : this.renderLoginForm();
  }
}

// PropTypes
Login.propTypes = {
  setEmailDispatcher: PropTypes.func.isRequired,
};

// Modificar o estado global
const mapDispatchToProps = (dispatch) => ({
  setEmailDispatcher: (payload) => dispatch(setEmail(payload)),
});

export default connect(null, mapDispatchToProps)(Login);
