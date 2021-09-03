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
      [name]: value,
    });
  }

  render() {
    const { email, password } = this.state;
    return (
      // Requisito 1 - Criar entradas de login, senha e botão entar.
      <fieldset>
        <label htmlFor="email">
          Email:
          <input
            id="email"
            type="text"
            onChange={ this.handleChange }
            data-testid="email-input"
            name="email"
            value={ email }
          />
        </label>

        <label htmlFor="senha">
          Senha:
          <input
            id="senha"
            type="password"
            onChange={ this.handleChange }
            data-testid="password-input"
            name="senha"
            value={ password }
          />
        </label>
        <button type="button">Entrar</button>
      </fieldset>
    );
  }
}
