import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <fieldset>
        <label htmlFor="email">
          Email:
          <input type="E-mail" name="email" data-tesId="email-input" onChange={ 0 } />
        </label>
        <label htmlFor="password">
          Senha:
          <input
            type="text"
            name="password"
            data-testId="password-input"
            onChange={ 0 }
          />
        </label>
        <button type="button">
          Entrar
        </button>
      </fieldset>
    );
  }
}

export default Login;
