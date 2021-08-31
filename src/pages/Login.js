import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ value, name }) {
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { login, password } = this.state;
    return (
      <div>
        <h1>Login</h1>
        <input
          type="text"
          name="login"
          value={ login }
          placeholder="E-mail"
          data-testid="email-input"
        />
        <h1>Password</h1>
        <input
          type="text"
          name="password"
          value={ password }
          placeholder="Senha"
          data-testid="password-input"
        />
        <button
          type="button"
        >
          Entrar
        </button>
      </div>
    );
  }
}

export default Login;
