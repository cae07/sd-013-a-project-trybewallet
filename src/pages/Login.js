import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      buttonDisabled: true,
    };
    this.handleButton = this.handleButton.bind(this);
    this.validLogin = this.validLogin.bind(this);
  }

  // função para validar email usando regex
  validEmail(email) {
    const reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    return reg.test(email);
  }

  // função para validar tamanho da senha
  validPassword(password) {
    const MIN_LENGHT = 6;
    return password.length >= MIN_LENGHT;
  }

  // Essa função ira validar a senha e o email da tela de login
  validLogin() {
    const { email, password } = this.state;
    if (this.validEmail(email) && this.validPassword(password)) {
      this.setState({
        buttonDisabled: false,
      });
    } else {
      this.setState({
        buttonDisabled: true,
      });
    }
  }

  // handleButton genérico para qualquer input do formulário
  handleButton({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value }, () => {
      this.validLogin();
    });
  }

  render() {
    const { buttonDisabled } = this.state;
    return (
      <div>
        <input
          type="email"
          placeholder="Insira seu email"
          name="email"
          /* value="" */
          onChange={ this.handleButton }
          data-testid="email-input"
        />
        <input
          type="text"
          placeholder="Insira sua senha"
          name="password"
          /* value="" */
          onChange={ this.handleButton }
          data-testid="password-input"
        />

        <button
          /* onClick={ () => setCart({ id, title, price, quant: 1, thumbnail, available }) } */
          type="button"
          data-testid="product-add-to-cart"
          disabled={ buttonDisabled }
        >
          entrar
        </button>
      </div>
    );
  }
}

export default Login;
