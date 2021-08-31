import React, { Component } from 'react';
// O connect é uma função muito importante que conecta o mapStateToProps e o mapDispatchToProps com o componente
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// O Redirect tem a função de redirecionar a página
import { Redirect } from 'react-router-dom';
// o actionEmailChange faz a action de alterar o email na state
import { actionEmailChange } from '../actions';

import '../styles/Login.css';

class Login extends Component {
  constructor(props) {
    super(props);

    // State inicial vai ser as chaves abaixo:
    this.state = {
      email: '', // guarda o email digitado
      password: '', // guarda o password digitado
      disabled: true, // chave para controlar o botão Entrar desabilitado até que atenda os requisitos e habilite o botão
      login: false, // quando o login acontecer, aparece como true, que o login foi realizado
    };

    // As funções abaixo serão habilitadas para serem usadas em todo o componente/page
    this.handleChange = this.handleChange.bind(this); // Tudo que for digitado nos campos, é alterado automaticamente na state
    this.handleClick = this.handleClick.bind(this); // Vai ser executada quando clicar no botão "Entrar"
    this.loginValidation = this.loginValidation.bind(this); // // Função que faz a validação do email e password digitado, e libera botão Entrar
  }

  // Essa função de handleClick vai ser executada quando clicar no botão "Entrar"
  handleClick(event) {
    event.preventDefault();

    // Desconstroi o handleEmail que está na props porque foi passado como chave no mapDispatchToProps, com o valor de disparo da action actionEmailChange
    const { handleEmail } = this.props;
    // Desconstrói o email que está guardado na state
    const { email } = this.state;

    this.setState({ login: true }); // Altera o state login para true, confirmando que foi realizado login

    // Essa chave, que está na props, faz com que a action seja disparada como parametro passando o email
    handleEmail(email);
  }

  // Tudo que for digitado nos campos, é alterado automaticamente na state
  // Conforme for digitando e guardando na state, o loginValidation é executado assíncrono, para ter uma validação instantânea conforme digitação
  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value }, () => {
      this.loginValidation();
    });
  }

  // Função que faz a validação do email e password digitado, conforme requisitos. Com isso libera o botão "Entrar" para ser acessado.
  loginValidation() {
    const { email, password } = this.state; // Desconstrói o email e password que está na state
    let disabled = false; // Aponta que a variável disabled recebe valor de false
    const EMAIL_VALIDATION = /^[\w]+@([\w]+\.)+[\w]{2,4}$/gi; // Esta é a validação regex para email
    const MIN_PASSWORD_LENGTH = 6; // Aponta que o password precisa ter no mínimo 6 caracteres

    // O método test() executa uma busca por uma correspondência entre uma expressão regular e uma string. Retorna true ou false
    // Ou seja, se o email possui validação da regex, e a quantidade de caracteres do password atendeu o requisito, então retorna true
    disabled = !(EMAIL_VALIDATION.test(email) && password.length >= MIN_PASSWORD_LENGTH);

    // Guardo no state disabled se vai ser True ou False, conforme atenda os requisitos acima informados.
    // Ou seja, se atendeu os requisitos, o disabled é true e o botão Entrar fica disponível para clicar
    this.setState({ disabled });
  }

  render() {
    const { email, password, disabled, login } = this.state; // Desconstrói o state com os states principais

    return (
      <main className="login-main">
        <header className="login-header">
          <h1>Trybe Wallet</h1>
          <h3
            style={ {
              display: 'flex',
              justifyContent: 'center',
            } }
          >
            Login
          </h3>
        </header>
        <form className="login-form">
          <input
            type="text"
            name="email"
            value={ email }
            onChange={ this.handleChange }
            data-testid="email-input"
            placeholder="user@email.com"
            className="login-input"
          />
          <input
            type="password"
            name="password"
            value={ password }
            onChange={ this.handleChange }
            data-testid="password-input"
            placeholder="******"
            className="login-input"
          />
          <button
            type="submit"
            disabled={ disabled }
            onClick={ this.handleClick }
            className="login-btn"
          >
            Entrar
          </button>
        </form>
        {/* Se o state login estiver como true, o link é redirecionado para /carteira */}
        {login ? <Redirect to="/carteira" /> : ''}
      </main>
    );
  }
}

// A função do mapDispatchToProps é despachar action para a store, com a finalidade de alterar o state da aplicação
// A função dispatch() serve para despachar uma action para o reducer.
// Recebe como parametro uma dispatch, e retorna um objeto com chave e valor.
const mapDispatchToProps = (dispatch) => ({
// A chave(handleEmail) é a prop do componente que vai ser envocada
// E eu passo uma callback que vai ser o dispatch que vou realizar
// O payload vai conter o NOVO valor que vai ser passado e alterado na state da store
  handleEmail: (payload) => dispatch(actionEmailChange(payload)),
});

// O connect é responsável por fazer a conexão do meu componente Login com o mapDispatchToProps
export default connect(null, mapDispatchToProps)(Login);

// Faço a validação se os dados que recebi são válidos
Login.propTypes = {
  handleEmail: PropTypes.func.isRequired,
};
