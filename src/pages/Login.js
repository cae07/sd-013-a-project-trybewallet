import React from 'react';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  handleClick() {
    alert('clicou');
  }

  render() {
    const { email, password } = this.state;

    return (
      <header>
        <h1>LOGIN</h1>
        <section>
          <form>
            <label htmlFor="input-email">
              Email:
              <input
                type="email"
                id="input-email"
                data-testid="email-input"
                onChange={ (event) => this.handleChange(event) }
                value={ email }
                name="email"
                placeholder="insira seu email"
              />
            </label>
            <label htmlFor="input-password">
              Senha:
              <input
                type="password"
                id="input-password"
                data-testid="password-input"
                onChange={ (event) => this.handleChange(event) }
                value={ password }
                name="password"
                placeholder="insira sua senha"
              />
            </label>
            <button
              type="button"
              onClick={ this.handleClick }
            >
              Entrar
            </button>
          </form>
        </section>
      </header>
    );
  }
}

export default Login;
