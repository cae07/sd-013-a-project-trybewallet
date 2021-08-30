import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      isBtnDisabled: true,
    };

    this.handleChange = this.handleChange.bind(this);
    this.verifyInputs = this.verifyInputs.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;

    this.setState({
      [name]: value,
    }, () => this.verifyInputs());
  }

  verifyInputs() {
    const { email, password } = this.state;
    const PASS_CHARACTER_LIMIT = 6;

    const emailVerification = /\S+@\S+\.\S+/;
    const isValidEmail = emailVerification.test(email);
    const isValidPassword = (password.length >= PASS_CHARACTER_LIMIT);

    if (isValidEmail && isValidPassword) {
      this.setState({
        isBtnDisabled: false,
      });
    } else {
      this.setState({
        isBtnDisabled: true,
      });
    }
  }

  render() {
    const { isBtnDisabled } = this.state;

    return (
      <div>
        <form action="">
          <label htmlFor="email">
            <input
              type="text"
              name="email"
              id="email"
              placeholder="E-mail"
              data-testid="email-input"
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="password">
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Senha"
              data-testid="password-input"
              onChange={ this.handleChange }
            />
          </label>
          <button type="button" disabled={ isBtnDisabled }>
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
