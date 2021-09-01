import React from 'react';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      senha: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  // função para salvar no estado email e senha
  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  // função para validar email e senha
  validateEmailSenha(eMail, pass) {
    const NUM = 6;
    const valid = eMail.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
    if (!valid || eMail.length === 0 || pass.length < NUM) {
      return true;
    }
    return false;
  }

  render() {
    const { email, senha } = this.state;
    return (
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
            value={ senha }
          />
        </label>

        <button
          type="button"
          disabled={ this.validateEmailSenha(email, senha) }
        >
          Entrar
        </button>
      </fieldset>
    );
  }
}

export default Login;

/* Referências: Exercício dia 16.3
Link consultado: https://github.com/FabiolaMoutinho/exercise-forms-redux/tree/gabarito
Aula ao vivo dia 16.2
Link consultado: https://github.com/tryber/sd-013-a-live-lectures/pull/38/files */
