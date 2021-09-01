import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { saveUserEmail } from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      login: false,
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleInput(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleClick(event) {
    const { email } = this.state;
    const { saveUserPropEmail } = this.props;
    saveUserPropEmail(email);
    this.setState({
      login: true,
    });
    event.preventDefault();
  }

  handleValidateEmail(email) {
    const emailValidate = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
    return emailValidate.test(email);
  }

  handleValidatePassword(password, number) {
    return (password.length >= number);
  }

  handleValidateButton(number) {
    const { email, password } = this.state;
    return (
      this.handleValidateEmail(email)
      && this.handleValidatePassword(password, number)
    );
  }

  render() {
    const { email, password, login } = this.state;
    const minLengthPassword = 6;

    if (login) {
      return <Redirect to="/carteira" />;
    }

    return (
      <form>
        <label htmlFor="email-input">
          <input
            type="text"
            id="email-input"
            name="email"
            placeholder="Digite seu E-mail"
            data-testid="email-input"
            value={ email }
            onChange={ this.handleInput }
          />
        </label>
        <label htmlFor="password-input">
          <input
            type="text"
            id="password-input"
            name="password"
            placeholder="Digite sua Senha"
            data-testid="password-input"
            value={ password }
            onChange={ this.handleInput }
          />
        </label>
        <button
          type="submit"
          disabled={ !this.handleValidateButton(minLengthPassword) }
          onClick={ this.handleClick }
        >
          Entrar
        </button>
      </form>
    );
  }
}

Login.propTypes = {
  saveUserPropEmail: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  saveUserPropEmail: (email) => dispatch(saveUserEmail(email)),
});

export default connect(null, mapDispatchToProps)(Login);
