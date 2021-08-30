import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  handleClick() {
    return <p>clicou</p>;
  }

  render() {
    const { email, password } = this.state;
    return (
      <form>
        <label htmlFor="input-email">
          E-mail:
          <input
            name="email"
            value={ email }
            onChange={ this.handleChange }
            request
            type="email"
            id="input-email"
          />
        </label>
        <label htmlFor="input-password">
          <input
            value={ password }
            name="password"
            onChange={ this.handleChange }
            request
            type="password"
            id="input-password"
          />
        </label>
        <button
          type="button"
          onClick={ this.handleClick }
        >
          Entrar
        </button>
      </form>
    );
  }
}

export default Login;
