import React from 'react';
import Input from '../components/Input';
import Button from '../components/Button';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      disabled: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.loginCheck = this.loginCheck.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
    this.loginCheck();
  }

  loginCheck() {
    const { email, password } = this.state;
    const mailFormat = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const minLength = 5;
    if (mailFormat.test(email) && password.length >= minLength) {
      this.setState({
        disabled: false,
      });
    } else {
      this.setState({
        disabled: true,
      });
    }
  }

  render() {
    const { email, password, disabled } = this.state;
    return (
      <form>
        <Input
          type="email"
          name="email"
          value={ email }
          placeholder="Email"
          datatestid="email-input"
          onChange={ this.handleChange }
        />
        <Input
          type="password"
          name="password"
          value={ password }
          placeholder="Senha"
          datatestid="password-input"
          onChange={ this.handleChange }
        />
        <Button disabled={ disabled } />
      </form>
    );
  }
}

export default Login;
