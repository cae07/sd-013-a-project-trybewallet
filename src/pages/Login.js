import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div>
        <fieldset>
          <label htmlFor="email">
            Email:
            <input type="E-mail" name="email" data-testid="email-input" onChange={ 0 } />
          </label>
          <label htmlFor="password">
            Senha:
            <input
              type="text"
              name="password"
              data-testid="password-input"
              onChange={ 0 }
            />
          </label>
          <button type="submit">
            Entrar
          </button>
        </fieldset>
      </div>
    );
  }
}

export default Login;
