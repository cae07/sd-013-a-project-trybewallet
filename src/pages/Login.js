import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super (props);
    this.state ={
      email: '',
      password: '',
      disableButton: true,
      redirectToWallet: false,
    }
    this.onClick = this.onClick.bind(this);
    this.activateButton = this.activateButton.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  
  onClick() {
    const { email } = this.state;
    const { userLogin } = this.props;
    this.setState({ redirectToCarteira: true });
    userLogin(email);
  }

  onChange() {
    const valueEmail = document.getElementById('email');
    const valuePassword = document.getElementById('senha');
    this.setState({
      email: valueEmail.value,
      password: valuePassword.value,
    });
    this.activateButton();
  }

  activateButton() {
    const { email, password } = this.state;
    const validPassword = 5;
    const validEmail = /\S+@\S+\.\S+/;
    if (password.length >= validPassword && validEmail.test(email)) {
      this.setState({
        disableButton: false,
      });
    } else {
      this.setState({
        disableButton: true,
      });
    }
  }

  render() {
    const { disableButton } = this.state
    return (
      <div>
        <input
            id="email"
            onChange={ this.onChange }
            data-testid="email-input"
            type="email"
            placeholder="Email"
            required
          />
          <input
            id="senha"
            onChange={ this.onChange }
            minLength="5"
            data-testid="password-input"
            type="password"
            placeholder="senha"
            required
          />
          <button
              onClick={ this.onclick }
              disabled={ disableButton }
              type="button"
            >
              Entrar
            </button>
      </div>
    )
  }
}

export default Login;
