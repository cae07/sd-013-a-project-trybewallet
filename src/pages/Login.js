import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      disableButton: true,
    };
  }

  validataionInput() {
    const { email, password } = this.state;
    const minPasswordLength = 6;
    const checkEmail = (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email));
    const checkPassword = (password.length >= minPasswordLength);
    if (checkEmail && checkPassword) {
      this.setState({ disableButton: false });
    } else {
      this.setState({ disableButton: true });
    }
  }

  render() {
    const { disableButton } = this.state;
    return (
      <div>
        <form>
          <label htmlFor="email-login">
            Email:
            <input
              data-testid="email-input"
              id="email-login"
              type="text"
              placeholder="Digite seu Email"
            />
          </label>
          <label htmlFor="password-login">
            Senha:
            <input
              data-testid="password-input"
              id="password-login"
              type="password"
              placeholder="Digite sua senha"
            />
          </label>
          <button
            type="button"
            disabled={ disableButton }
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
