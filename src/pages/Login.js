import React from 'react';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
    this.onSubmitForm = this.onSubmitForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  onSubmitForm(event) {
    event.preventDefault();
  }

  handleChange({ target }) {
    const { name } = target;
    const { value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { email, password } = this.state;
    const seis = 6;
    const validateEmail = () => {
      const isValid = email.match(/^([\w.%+-]+)@([\w-]+.)+([\w]{2,})$/i);
      if (!isValid || email.lenght === 0) {
        return false;
      }
      return true;
    };

    const enable = validateEmail() && (password.length >= seis);

    return (
      <div>
        <form onSubmit={ this.onSubmitForm }>
          <label htmlFor="email">
            Email
            <input
              type="text"
              name="email"
              placeholder="Insira seu Email aqui!"
              id="email"
              value={ email }
              data-testid="email-input"
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="password">
            Senha
            <input
              type="text"
              name="password"
              placeholder="Insira sua senha aqui!"
              id="password"
              data-testid="password-input"
              value={ password }
              onChange={ this.handleChange }
            />
          </label>
          <div>
            <input type="submit" disabled={ !enable } value="Entrar" />
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
