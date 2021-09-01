import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginAction } from '../actions/index';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      disableButton: true,
    };

    this.onSubmitForm = this.onSubmitForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.verificaEmail = this.verificaEmail.bind(this);
  }

  // Função executada ao clicar no botão
  // Por enquanto vai exibir um console.log com as informações
  // do estado e vai redirecionar para a página seguinte
  onSubmitForm() {
    const { history, dispatchLogin } = this.props;
    const { email } = this.state;
    // Disparamos a nossa action através da função importada
    // de actions.js, que apelidamos de dispatchLogin
    dispatchLogin(email);
    history.push('/carteira');
  }

  // Função para verificar o e-mail
  verificaEmail() {
    const { email, password } = this.state;
    // console.log(`E-mail:${email} - ${password}`);
    // https://pt.stackoverflow.com/questions/1386/express%C3%A3o-regular-para-valida%C3%A7%C3%A3o-de-e-mail
    const regexEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+?$/;
    const passwordLength = 6;
    // console.log(regexEmail.test(email));
    if (password.length >= passwordLength && regexEmail.test(email)) {
      // console.log('Passou na validação');
      this.setState({
        disableButton: false,
      });
    } else {
      // console.log('Não passou na validação');
      this.setState({
        disableButton: true,
      });
    }
  }

  // Função genérica para salvar o que é digitado no input dentro do estado
  handleChange({ target }) {
    const { name, value } = target;
    this.setState(
      { [name]: value },
      () => this.verificaEmail(),
    );
  }

  render() {
    const { email, password, disableButton } = this.state;
    return (
      <fieldset className="container-login">
        <legend>Login Trybe Wallet</legend>
        <input
          type="text"
          data-testid="email-input"
          name="email"
          placeholder="E-mail"
          onChange={ this.handleChange }
          value={ email }
        />
        <input
          type="text"
          data-testid="password-input"
          name="password"
          placeholder="Password"
          onChange={ this.handleChange }
          value={ password }
        />
        <button
          type="button"
          onClick={ this.onSubmitForm }
          disabled={ disableButton }
        >
          Entrar
        </button>
      </fieldset>
    );
  }
}

Login.propTypes = {
  dispatchLogin: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  // dispatchSetValue é um "apelido" para executarmos a nossa action creator
  // Nossa action creator é a função importada do arquivo actions
  // ou seja, setPersonalValue,
  // que vai receber um parâmetro
  // esse parâmetro é o estado do nosso componente
  // aqui estamos apenas avisando que vai existir um parâmetro
  // mas o estado do componente é passado no momento da execução
  // nesse caso, dentro da função onSubmitForm
  dispatchLogin: (email) => dispatch(loginAction(email)),
}
);

// a função connect conversa com o Provider, um avisa o outro quando há alterações.
export default connect(null, mapDispatchToProps)(Login);
