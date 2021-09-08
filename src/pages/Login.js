import React from 'react';
import Button from '../components/button';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      senha: '',
    };
  }

  handler(e) {
    const { name } = e.target;
    this.setState({ [name]: e.target.value });
  }

  isAuthenticated() {
    const { email, senha } = this.state;
    const emailRegexp = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    const SENHA_LENGTH = 6;
    if (emailRegexp.test(email) && senha.length === SENHA_LENGTH) {
      return false;
    }
    return true;
  }

  render() {
    const { email } = this.state;
    return (
      <div>
        <input
          data-testid="email-input"
          name="email"
          type="email"
          onChange={ (e) => this.handler(e) }
        />
        <input
          data-testid="password-input"
          name="senha"
          type="password"
          onChange={ (e) => this.handler(e) }
        />
        <div>
          <Button disabled={ this.isAuthenticated() } email={ email } />
        </div>
      </div>
    );
  }
}

export default Login;
