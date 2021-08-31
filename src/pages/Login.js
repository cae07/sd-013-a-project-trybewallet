import React from 'react';

// Para o Regex -> https://www.horadecodar.com.br/2020/09/07/expressao-regular-para-validar-e-mail-javascript-regex/
// Disable Button -> https://flaviocopes.com/how-to-disable-button-javascript/

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      buttonStateDisabled: true,
    };
  }

  handleChange({ target }) {
    const { name, value } = target;

    this.setState({
      [name]: value,
    }, () => this.inputValidation());
  }

  inputValidation() {
    const emailValidation = /\S+@\S+\.\S+/;
    const passwordValidationLength = 6;
    const { email, password } = this.state;

    if (emailValidation.test(email) && passwordValidationLength <= password.length) {
      this.state({
        buttonStateDisabled: false,
      });
    } else {
      this.state({
        buttonStateDisabled: true,
      });
    }
  }

  render() {
    const { email, password, buttonState } = this.state;
    return (
      <div>
        <input
          type="email"
          data-testid="email-input"
          placeholder="Insira seu Email"
          onChange={ this.handleChange }
          value={ email }
        />
        <input
          type="password"
          data-testid="password-input"
          placeholder="Insira sua senha"
          onChange={ this.handleChange }
          value={ password }
        />
        <button disabled={ buttonState } type="button">Entrar</button>
      </div>
    );
  }
}

export default Login;
