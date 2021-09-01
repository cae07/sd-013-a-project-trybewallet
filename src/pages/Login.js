import React from 'react';
import '../css/login.css';

class Login extends React.Component {
  render() {
    return (
      <div className="div-form-login">
        <form className="form-login">
          <label htmlFor="input-email" className="label-email">
            e-mail
            <input
              id="input-email"
              className="input-email"
              data-testid="email-input"
              type="text"
              placeholder="Digite o email"
            />
          </label>
          <label htmlFor="label-senha" className="label-senha">
            senha
            <input
              id="input-senha"
              className="input-senha"
              placeholder="Digite a senha"
              data-testid="password-input"
              type="password"
            />
          </label>
          <button
            id="btn-login"
            type="submit"
            className="btn-login"
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
