import React from 'react';
import InputField from '../components/InputField';
import SubmitBtn from '../components/SubmitBtn';

class Login extends React.Component {

  onChange = () => ({});

  onClick = () => ({});

  render() {
    return (
      <formfield className="login">
        <InputField
          testid="email-input"
          type="text"
          placeholder="user@email.com"
          onChange= { this.onChange }/>
        <InputField
          testid="password-input"
          type="text"
          placeholder="Password"
          onChange= { this.onChange }/>
        <SubmitBtn testid="submit-login-btn"
        onClick = { this.onClick }
        name = "Entrar"/>
      </formfield>
    );
  }
}

export default Login;
