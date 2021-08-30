import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div>
        <form>
          <input data-testid="email-input" type="text" />
          <input data-testid="password-input" type="text" />
          <button type="submit"> Entrar </button>
        </form>
      </div>
    );
  }
}

export default Login;
