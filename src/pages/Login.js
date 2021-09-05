import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { salvarStore } from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.validaEmail = this.validaEmail.bind(this);
    this.validaPassword = this.validaPassword.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value, // func. padrão p/ alterar state.
    });
  }

  validaEmail() {
    const { email } = this.state;
    const emailRegex = /\S+@\S+\.\S+/; // como exemplo o regex do proj. de Aline Hoshino.
    return emailRegex.test(email);
  }

  validaPassword() {
    const { password } = this.state;
    const validPassword = 6;
    return password.length >= validPassword; // este formato retorna booleano (explicação do Leme)
  }

  handleClick() {
    const { enviarEmail, history } = this.props; // esta função fazendo a despatch para estado global
    const { email } = this.state; // 'enviarEmail' função criada no mapdispatch.resgatada aqui como props.
    enviarEmail(email);
    history.push('/carteira'); // após o click no botão'history.push' encaminha para outra página.
  }

  render() {
    const { validaPassword, validaEmail } = this; // porque apenas this(?), de acorodo com Leme,
    const { email, password } = this.state; // estas função não são state e nem props, mas precisam renderizar aqui.
    return (
      <div>
        <fieldset>
          <label htmlFor="email">
            Email:
            <input
              type="text"
              name="email"
              value={ email }
              data-testid="email-input"
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="password">
            Senha:
            <input
              type="text"
              name="password"
              value={ password }
              data-testid="password-input"
              onChange={ this.handleChange }
            />
          </label>
          <button
            type="submit"
            disabled={ !(validaPassword() && validaEmail()) } // função para botão iniciar desabilitado.
            onClick={ this.handleClick }
          >
            Entrar
          </button>
        </fieldset>
      </div>
    );
  }
}

Login.propTypes = {
  enviarEmail: PropTypes.func,
  history: PropTypes.shape(),
}.isRequired;

const mapDispatchToProps = (dispatch) => ({ // dispatch: mapDispatchToProps é para ler o estado global
  enviarEmail: (email) => dispatch(salvarStore(email)),
});

export default connect(null, mapDispatchToProps)(Login);

// Este projeto teve a ajuda essencial de: Aline Hoshino.
// Além de: Julia, Leme, Murilo Rainho.
