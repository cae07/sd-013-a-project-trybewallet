import React from 'react';
import '../css/login.css';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      disable: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.validButton = this.validButton.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value },
      () => this.validButton());
  }

  validEmail(email) {
    const isValid = email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
    if (!isValid || email === 0) {
      return false;
    }
    return true;
  }

  validPassword(password) {
    const minPassword = 6;
    return (password.length >= minPassword);
  }

  validButton() {
    const { email, password } = this.state;
    if (this.validEmail(email) && this.validPassword(password)) {
      this.setState({
        disable: false,
      });
    } else {
      this.setState({
        disable: true,
      });
    }
  }

  render() {
    const { disable } = this.state;

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
              name="email"
              placeholder="Digite o email"
              onChange={ this.handleChange }
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
              name="password"
              onChange={ this.handleChange }
            />
          </label>
          <button
            disabled={ disable }
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
