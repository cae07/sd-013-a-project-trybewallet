import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import setEmail from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      redirect: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.isValid = this.isValid.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  isValid() {
    const NUMBER = 5;
    const { email, password } = this.state;
    const emailValidator = email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/i);
    const passwordValidator = password.length > NUMBER;
    if (emailValidator && passwordValidator) return true;
  }

  handleClick() {
    const { dispatchSetEmail } = this.props;
    const { email } = this.state;
    this.setState({ redirect: true });
    dispatchSetEmail(email);
  }

  render() {
    const { email, password, redirect } = this.state;
    if (redirect) return <Redirect to="/carteira" />;
    return (
      <div>
        <label htmlFor="input-email">
          Email:
          <input
            type="email"
            name="email"
            id="input-email"
            data-testid="email-input"
            onChange={ this.handleChange }
            value={ email }
          />
        </label>
        <label htmlFor="input-password">
          Senha:
          <input
            type="text"
            name="password"
            id="input-password"
            data-testid="password-input"
            onChange={ this.handleChange }
            value={ password }
          />
        </label>
        <button
          type="button"
          disabled={ !this.isValid() }
          onClick={ this.handleClick }
        >
          Entrar
        </button>
      </div>
    );
  }
}

Login.propTypes = {
  dispatchSetEmail: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  dispatchSetEmail: (email) => dispatch(setEmail(email)),
});

export default connect(null, mapDispatchToProps)(Login);
