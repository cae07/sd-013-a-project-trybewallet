import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { func } from 'prop-types';
import { salvarStore } from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      validate: {
        validateEmail: false,
        validatePassword: false,
      },
      redirect: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.emailValidation = this.emailValidation.bind(this);
    this.passwordValidation = this.passwordValidation.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  emailValidation(email) {
    const { validate } = this.state;
    // const {email}=this.state;
    const regex = /\S+@\S+\.\S+/;
    if (regex.test(email)) {
      return this.setState({

        validate: {
          ...validate,
          validateEmail: true,
        },
      });
    }
    return this.setState({
      validate: {
        ...validate,
        validateEmail: false,
      },
    });
  }

  passwordValidation(password) {
    const { validate } = this.state;
    // const {password}=this.state;
    const sizeNumber = 6;
    if (password.length >= sizeNumber) {
      return this.setState({
        validate: {
          ...validate,
          validatePassword: true,
        },
      });
    }
    return this.setState({
      validate: {
        ...validate,
        validatePassword: false,
      },
    });
  }

  handleChange({ target }) {
    const { value, name } = target;
    if (name === 'email') {
      this.emailValidation(value);
      return this.setState({ [name]: value });
    } if (name === 'password') {
      this.passwordValidation(value);
      return this.setState({ [name]: value });
    }
  }

  handleClick() {
    const { sendEmail } = this.props;
    const { email } = this.state;
    sendEmail(email);
    return this.setState({ redirect: true });
  }

  render() {
    const { validate, email, password, redirect } = this.state;
    if (redirect) return <Redirect to="/carteira" />;
    return (
      <form>
        <img
          src="../imagens/julios2"
          alt="logo"
        />
        <label htmlFor="emailLabel">
          <input
            data-testid="email-input"
            placeholder="email"
            type="email"
            name="email"
            id="emailLabel"
            onChange={ this.handleChange }
            value={ email }
          />
        </label>
        <label htmlFor="password">
          <input
            data-testid="password-input"
            placeholder="password"
            type="password"
            name="password"
            id="passwordLabel"
            onChange={ this.handleChange }
            value={ password }
          />
        </label>
        <button
          disabled={ !validate.validateEmail || !validate.validatePassword }
          onClick={ this.handleClick }
          type="button"
          id="button"
        >
          Entrar
        </button>
      </form>
    );
  }
}

Login.propTypes = {
  sendEmail: func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  sendEmail: (email) => dispatch(salvarStore(email)),
});

export default connect(null, mapDispatchToProps)(Login);
