import React from 'react';

function validateEmail(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}

function validatePassword(password) {
  const minLength = 6;
  return (password.length >= minLength);
}

class Login extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.checkLogin = this.checkLogin.bind(this);

    this.state = {
      disabledButton: true,
      email: '',
      password: '',
    };
  }

  checkLogin() {
    const { email, password } = this.state;
    if (validateEmail(email) && validatePassword(password)) {
      this.setState({ disabledButton: false });
    } else {
      this.setState({ disabledButton: true });
    }
  }

  handleChange({ target }) {
    const { value, name } = target;
    this.setState({
      [name]: value,
    }, () => this.checkLogin());
  }

  render() {
    const { disabledButton } = this.state;
    return (
      <div>
        <form>
          <label htmlFor="email">
            <input
              data-testid="email-input"
              name="email"
              type="email"
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="email">
            <input
              data-testid="password-input"
              name="password"
              type="password"
              onChange={ this.handleChange }
            />
          </label>
          <button
            disabled={ disabledButton }
            type="submit"
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
