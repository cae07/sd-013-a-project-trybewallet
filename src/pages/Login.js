import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

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
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.loginValidation = this.loginValidation.bind(this);
  }

  handleClick(event) {
    event.preventDefault();

    const { handleEmail } = this.props; // Desconstroi o handleEmail que foi passado como chave no mapDispatchToProps, com o valor de disparo da action actionEmailChange
    const { email } = this.state;

    this.setState({ login: true });

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
        {login ? <Redirect to="/carteira" /> : ''}
      </main>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  handleEmail: (payload) => dispatch(actionEmailChange(payload)),
});

export default connect(null, mapDispatchToProps)(Login);

Login.propTypes = {
  handleEmail: PropTypes.func.isRequired,
};
