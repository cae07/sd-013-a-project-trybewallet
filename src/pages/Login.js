import React from 'react';
import PropTypes from 'prop-types';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      user: {
        email: '',
      },
      // wallet: {
      //   currencies: [],
      //   expenses: [],
      // },
      buttonState: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    this.setState({
      user: {
        email: event.target.value,
      },
    });
  }

  handleChangePassword({ target }) {
    const { user: { email } } = this.state;
    const tamanhoSenha = 6;
    const regexEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+?$/i;
    const boolValidateEmail = regexEmail.test(email);
    console.log(target.value.length);
    const validatePassword = (target.value.length >= tamanhoSenha);
    const validateButton = !(validatePassword && boolValidateEmail);
    this.setState({
      buttonState: validateButton,
    });
  }

  handleClick() {
    const { history } = this.props;
    const { user: { email } } = this.state;
    const emailPadrao = 'alguem@alguem.com';
    if (emailPadrao === email) history.push('/carteira');
  }

  render() {
    const { buttonState } = this.state;
    return (
      <section>
        <div>Login</div>
        <input
          type="email"
          data-testid="email-input"
          onChange={ this.handleChange }
        />
        <input
          type="password"
          data-testid="password-input"
          onChange={ this.handleChangePassword }
        />
        <button
          type="button"
          id="buttonValid"
          disabled={ buttonState }
          onClick={ this.handleClick }
        >
          Entrar
        </button>
      </section>
    );
  }
}

Login.propTypes = {
  history: PropTypes.func,
}.isRequired;

export default Login;
