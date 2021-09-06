import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="login">
          Login:
          <input data-testid="email-input" type="text" name="login" />
        </label>

        <label htmlFor="senha">
          Senha:
          <input data-testid="password-input" type="text" name="senha" />
        </label>

        <button type="submit"> Entrar </button>
      </form>
    );
  }
}

export default Login;
