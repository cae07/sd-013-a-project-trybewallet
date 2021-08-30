import React from 'react';
import InputField from '../components/InputField';
import SubmitBtn from '../components/SubmitBtn';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onChange() {

  }

  onClick() {

  }

  render() {
    return (
      <form className="login">
        <InputField
          testid="email-input"
          type="text"
          placeholder="user@email.com"
          onChange={ this.onChange }
        />
        <InputField
          testid="password-input"
          type="text"
          placeholder="Password"
          onChange={ this.onChange }
        />
        <SubmitBtn
          testid="submit-login-btn"
          onClick={ this.onClick }
          name="Entrar"
        />
      </form>
    );
  }
}

export default Login;
