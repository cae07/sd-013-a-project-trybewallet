import React from 'react';

// [1.5] - Criar os inputs do requisito. [feito em commit passado]

class Login extends React.Component {
  // 2.1.1 Constructor

  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      disabled: true,
    };
    // 2.1.4 bind dos handles
    this.handleInputs = this.handleInputs.bind(this);
  }

  // 2.1.3 logica dos handles

  // handleButton(event) {
  //   event.preventDefault();
  //   const { email, password } = this.state;
  // }

  handleInputs(event) {
    this.setState({ [event.target.name]: event.target.value }, () => {
      const { email, password, disabled } = this.state;
      const regex = /(.)(.*)@(.)(.*)\.(...)(.*)/;
      const passNum = 6;
      if (email.match(regex) && password.length >= passNum && disabled === true) {
        this.setState({ disabled: false });
      }
    });
  }

  render() {
    // 2.1.2 render do forms
    const { email, password, disabled } = this.state;
    const { handleButton, handleInputs } = this;
    return (
      <form>
        <h1>Login</h1>
        <input
          data-testid="email-input"
          name="email"
          placeholder="Email"
          value={ email }
          onChange={ handleInputs }
        />
        <input
          data-testid="password-input"
          name="password"
          placeholder="Senha"
          value={ password }
          onChange={ handleInputs }
        />
        <button
          type="button"
          disabled={ disabled }
          onClick={ handleButton }
        >
          Entrar
        </button>
      </form>
    );
  }
}

export default Login;
