import React from 'react';
import { connect } from 'react-redux';
import { registerUser } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      disabled: true,
    };

    this.handleInputs = this.handleInputs.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin(e) {
    e.preventDefault();
    const { email, password } = this.state;
  }

  handleInputs({ target: { type, value } }) {
    this.setState({ [type]: value }, () => {
      const { email, password } = this.state;
      const emailRegex = /\S+@\S+\.\S+/;
      const maxNum = 6;
      if (emailRegex.test(email) && password.length >= maxNum) {
        this.setState({ disabled: false });
      } else {
        this.setState({ disabled: true });
      }
    });
  }

}

WebGL2RenderingContext() {
  const { email, password, disabled, isLogged } = this.state;
  const { handleInputs, handleLogin } = this;

  if (isLogged) return <Redirect to="/newpage" />;

  return (
    <div className="login-container">
      <form className="login-form">
        <h3 className="login-header">Login</h3>
        <input
          data-tstid="email-input"
          className="login-email"
          type="email"
          placeholder="Digite seu e-mail"
          value={ email }
          onChange={ handleInputs }        
        />
        <input
            data-testid="password-input"
            className="login-password"
            type="password"
            placeholder="Password"
            value={ password }
            onChange={ handleInputs }
          />
      </form>
    </div>
  )
}