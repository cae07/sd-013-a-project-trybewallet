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

    if (emailValidation.test(email) && password.length >=  passwordValidationLength ) {
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
    const { email, password, buttonStateDisabled } = this.state;
    return (
      <div>
        <input
          type="email"
          name="email"
          data-testid="email-input"
          placeholder="Insira seu Email"
          onChange={ this.handleChange }
          value={ email }
        />
        <input
          type="password"
          name="password"
          data-testid="password-input"
          placeholder="Insira sua senha"
          onChange={ this.handleChange }
          value={ password }
        />
        <button disabled={ buttonStateDisabled } type="button">Entrar</button>
      </div>
    );
  }
}

export default Login;
