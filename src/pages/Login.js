import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    this.setState((state) => ({
      ...state,
      [target.name]: target.value,
    }));
  }

  render() {
    const { email, password } = this.state;
    const REGEX_EMAIL = /^([\w\d._\-#])+@([\w\d._\-#]+[.][\w\d._\-#]+)+$/;
    const passWordLengthMin = 6;
    return (
      <form>
        <input
          data-testid="email-input"
          type="email"
          name="email"
          value={ email }
          onChange={ this.handleChange }
        />
        <input
          data-testid="password-input"
          type="password"
          name="password"
          value={ password }
          onChange={ this.handleChange }
        />
        <button
          type="submit"
          disabled={ !REGEX_EMAIL.test(email) || password.length < passWordLengthMin }
        >
          Entrar
        </button>
      </form>
    );
  }
}

export default Login;
