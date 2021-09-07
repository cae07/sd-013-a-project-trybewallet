import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      login: '',
      senha: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { login, senha } = this.state;
    return (
      <form>
        <label htmlFor="login">
          Login:
          <input
            data-testid="email-input"
            type="text"
            name="login"
            value={ login }
            onChange={ this.handleChange }
          />
        </label>

        <label htmlFor="senha">
          Senha:
          <input
            data-testid="password-input"
            type="text"
            name="senha"
            value={ senha }
            onChange={ this.handleChange }
          />
        </label>

        <button type="submit"> Entrar </button>
      </form>
    );
  }
}

export default Login;
