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

        <button type="button">Entrar</button>
      </fieldset>
    );
  }
}

export default Login;

/* Referências: Exercício dia 16.3
Link consultado: https://github.com/FabiolaMoutinho/exercise-forms-redux/tree/gabarito */
