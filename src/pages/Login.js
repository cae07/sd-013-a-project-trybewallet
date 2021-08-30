import React from 'react';

class Login extends React.Component {
  constructor() {
    super();
    this.onSubmitForm = this.onSubmitForm.bind(this);
  }

  onSubmitForm(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={ this.onSubmitForm }>
          <label htmlFor="email">
            Email
            <input
              id="email"
              type="buton"
              data-testid="email-input"
              placeholder="Insira seu Email aqui!"
            />
          </label>
          <label htmlFor="password">
            Senha
            <input
              id="password"
              type="buton"
              data-testid="password-input"
              placeholder="Insira sua senha aqui!"
            />
          </label>
          <div>
            <input type="button" value="Entrar" />
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
