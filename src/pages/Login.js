import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { insertEmail } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loginEmail: '',
      loginPassword: '',
      buttonIsDisabled: true,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value }, () => {
      const { loginEmail, loginPassword } = this.state;

      const EmailPattern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
      const MinPasswordLength = 6;

      if (EmailPattern.test(loginEmail) && loginPassword.length >= MinPasswordLength) {
        this.setState({ buttonIsDisabled: false });
      } else {
        this.setState({ buttonIsDisabled: true });
      }
    });
  }

  handleClick() {
    const { history, dispatchNewEmailToStore } = this.props;
    const { loginEmail } = this.state;

    dispatchNewEmailToStore(loginEmail);
    history.push('/carteira');
  }

  render() {
    const { loginEmail, loginPassword, buttonIsDisabled } = this.state;

    return (
      <div>

        <h1>Trybe Wallet</h1>
        <h3>Login</h3>

        <label htmlFor="email-input">
          Email:
          <input
            id="email-input"
            data-testid="email-input"
            type="email"
            placeholder="Insira seu email"
            name="loginEmail"
            value={ loginEmail }
            onChange={ this.handleChange }
          />
        </label>

        <label htmlFor="password-input">
          Senha:
          <input
            id="password-input"
            data-testid="password-input"
            type="password"
            placeholder="Insira sua senha"
            name="loginPassword"
            value={ loginPassword }
            onChange={ this.handleChange }
          />
        </label>

        <button
          type="button"
          disabled={ buttonIsDisabled }
          onClick={ this.handleClick }
        >
          Entrar
        </button>

      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.object,
}.isRequired;

const mapDispatchToProps = (dispatch) => ({
  dispatchNewEmailToStore: (newEmail) => dispatch(insertEmail(newEmail)),
});

export default connect(null, mapDispatchToProps)(Login);
