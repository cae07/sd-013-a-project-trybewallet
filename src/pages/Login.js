import React, { Component } from 'react';

export default class Login extends Component {
  constructor(props) {
    super(props);
    // É preciso criar um estado para armazenar o email e password
    this.state = {
      email: '',
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  // Salvando o estado do email e password
  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value, // AS [], servem para referenciar as cheves do state
    });
  }

  // Requisito 2 - Validar email e senha.
  validateUserInput(email, password) {
    const MIN_LENGTH_PASS = 6;
    const passwordValidate = (password.length >= MIN_LENGTH_PASS);
    const emailValidate = email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
    if (passwordValidate && emailValidate) {
      return false;
    }
    return true;
  }

  render() {
    const { email, password } = this.state;
    return (
      // Requisito 1 - Criar entradas de login, senha e botão entar.
      // Uma refatoração é criar um componente input como na aula de
      // formulario com eventos
      <fieldset>
        <label htmlFor="email">
          Email:
          <input
            data-testid="email-input"
            id="email"
            name="email"// Serve para a funççao generica handleChange
            value={ email }
            type="text"
            onChange={ this.handleChange }
          />
        </label>

        <label htmlFor="senha">
          Senha:
          <input
            data-testid="password-input"
            id="senha"
            name="password"// Serve para a funççao generica handleChange
            value={ password }
            type="password"
            onChange={ this.handleChange }
          />
        </label>
        <button
          type="button"
          disabled={ this.validateUserInput(email, password) }
        >
          Entrar
        </button>
      </fieldset>
    );
  }
}
