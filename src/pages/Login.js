import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setLogin } from '../actions';
// import './login.css';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    const { dispatchSetValue, history } = this.props;
    const { email } = this.state;
    dispatchSetValue(email);
    history.push('/');
  }

  handleChange() {
    const { email, password } = this.state;
    const regexEmail = /^\w+(\[\+\.-\]?\w)*@\w+(\[\.-\]?\w+)*\.[a-z]+$/i;
    const regexPassword = /^[0-9]{5,}$/i;
    const button = document.querySelector('.submit-button');
    if ((regexEmail.test(email)) && (regexPassword.test(password))) {
      button.removeAttribute('disabled');
    } else {
      button.setAttribute('disabled', '');
    }
  }

  render() {
    return (
      <section className="login-section">
        <form onChange={ this.handleChange }>
          <label htmlFor="email-input">
            <input
              autoComplete="off"
              className="email-input"
              data-testid="email-input"
              name="email"
              onChange={
                ({ currentTarget }) => this.setState({ email: currentTarget.value })
              }
              placeholder="Email"
              required
              type="email"
            />
          </label>
          <label htmlFor="password-input">
            <input
              autoComplete="off"
              data-testid="password-input"
              name="password"
              onChange={
                ({ currentTarget }) => this.setState({ password: currentTarget.value })
              }
              placeholder="Senha"
              required
              type="password"
            />
          </label>
          <Link
            to="/carteira"
            onClick={ this.handleSubmit }
          >
            <button
              type="submit"
              className="submit-button"
              disabled
            >
              Entrar
            </button>
          </Link>
        </form>
      </section>
    );
  }
}

Login.propTypes = {
  dispatchSetValue: PropTypes.func,
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
}.isRequired;

const mapDispatchToProps = (dispatch) => ({
  dispatchSetValue: (email) => dispatch(setLogin(email)),
});

const mapStateToProps = (state) => ({ email: state.user.email });

export default connect(mapStateToProps, mapDispatchToProps)(Login);
