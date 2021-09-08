import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import loginAction from '../actions/index';

// Referência Pedro Alles turma 12 //
class Login extends React.Component {
  constructor(props) {
    super(props);
    // Criado um estado inicia com campo de email e senha vazio
    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
  }
  // Criação da função handleChange, sempre que ocorrer alguma modificação no campo login ou senha //
  // automaticamente é valor do estado é atualizado

  handleChange({ target }) {
    this.setState((state) => ({
    // Aqui é eu estou dando um spread(...) para desustruturar as informações que tem dentro do estado //
      ...state,
      // target.name é valor da chave, que poderá ser email ou password(depende de onde eu preencher) //
      // Target.value vai ser o valor que eu digitar.
      [target.name]: target.value,
    }));
  }
  // Ajuda do Wesley de melo

  handleOnClick(event) {
    // serve para página parar de dar resfresh
    event.preventDefault();
    const { myFirstDispatch } = this.props;
    const { email } = this.state;
    myFirstDispatch(email);
    // Mudar a rota para carteira
    const { history } = this.props;
    history.push('/carteira');
  }

  render() {
  // Aqui esto desustruturando o estado //
  // Após isso estou declarando regex para validação do email //
  // Estou considerando que a senha tem que ter no minimo 6 numeros //
    const { email, password } = this.state;
    const REG_EX_EMAIL = /^([\w\d._\-#])+@([\w\d._\-#]+[.][\w\d._\-#]+)+$/;
    const minPassLength = 6;
    return (
      <form onSubmit={ this.handleOnClick }>
        <input
          data-testid="email-input"
          type="text"
          name="email"
          value={ email }
          // Aqui eu estou chamando a função caso aja alguma alteração no campo do input //
          onChange={ this.handleChange }
        />
        <br />
        <input
          data-testid="password-input"
          type="number"
          name="password"
          value={ password }
          // Aqui eu estou chamandando a função caso aja alguma alteração no campo do input //
          onChange={ this.handleChange }
        />
        <br />
        <button
          type="submit"
          // Aqui os campos vao estar desabilitados caso seja difente do regex ou a senha seja menor que 6//
          disabled={ !REG_EX_EMAIL.test(email) || password.length < minPassLength }
        >
          Entrar
        </button>
      </form>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  myFirstDispatch: (email) => dispatch(loginAction(email)) });

Login.propTypes = {
  myFirstDispatch: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
