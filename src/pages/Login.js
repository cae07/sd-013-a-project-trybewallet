import React from 'react';
import Input from '../components/Input';
import Button from '../components/Button';

class Login extends React.Component {
  render() {
    return (
      <div>
        <Input
          label="Email:"
          name="email"
          datatestid="email-input"
          onChange=""
        />
        <Input
          label="Senha:"
          name="password"
          datatestid="password-input"
          onChange=""
        />
        <Button
          onClick=""
        />
      </div>
    );
  }
}

export default Login;
