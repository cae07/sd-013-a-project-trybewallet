import React from 'react';
import Input from '../components/Input';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange({ target }) {
    this.setState({
      [target.name]: target.value,
    });
  }

  render() {
    const { email, password } = this.state;

    return (
      <div className="container">
        <form>
          <Input
            name="email"
            type="email"
            placeholder="email@email.com"
            test="email-input"
            value={ email }
            onChange={ this.handleInputChange }
          />

          <Input
            name="password"
            type="password"
            placeholder="********"
            test="password-input"
            value={ password }
            onChange={ this.handleInputChange }
          />

          {/* <label htmlFor="email">
            <input
              type="email"
              name="email"
              placeholder="email@email.com"
              data-testid="email-input"
            />
          </label>
          <label htmlFor="password">
            <input
              type="password"
              name="password"
              placeholder="********"
              data-testid="email-input"
            />
          </label> */}

          <button type="submit">
            Entrar
          </button>
        </form>
      </div>);
  }
}

export default Login;
