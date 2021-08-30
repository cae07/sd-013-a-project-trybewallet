import React from 'react';
import Input from '../components/Input';
import Button from '../components/Button';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
  }

  render() {
    const { email, password } = this.state;
    return (
      <div>
        <Input
          type="email"
          name="email"
          value={ email }
          placeholder="Email"
          datatestid="email-input"
          required
        />
        <Input
          type="password"
          name="password"
          value={ password }
          placeholder="Senha"
          datatestid="password-input"
          required
        />
        <Button />
      </div>
    );
  }
}

export default Login;
