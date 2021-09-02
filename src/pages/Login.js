import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      buttonDisable: true,
    };
  }

  render() {
    const { buttonDisable } = this.state;
    return (
      <div>
        <input
          data-testid="email-input"
          placeholder="E-mail"
        />
        <input
          data-testid="password-input"
          placeholder="Password"
        />
        <button type="button" disabled={ buttonDisable }>
          Entrar
        </button>
      </div>
    );
  }
}

export default Login;
