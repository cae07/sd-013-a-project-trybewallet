import React from 'react';
// 1.5 - Criar os inputs do requisito.
class Login extends React.Component {
  render() {
    return (
      <form>
        <input data-testid="email-input" type="text" />
        <input data-testid="password-input" type="text" />
        <button type="submit">Entrar</button>
      </form>
    );
  }
}

export default Login;
