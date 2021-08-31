import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { userAct } from '../actions';
// Agradecimentos ao grandessíssimo Rogério P. da Silva que me deu aulas.

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      pass: '',
      validate: {
        login: false,
        senha: false,
      },
    };
  }

  validateEmail() {
    const { email, validate } = this.state;
    const valida = /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/;
    if (valida.test(email)) {
      return this.setState({ validate: { ...validate, login: true } });
    }
    this.setState({ validate: { ...validate, login: false } });
  }

  validateSenha() {
    const { pass, validate } = this.state;
    const minimumPass = 6;
    if (pass.length >= minimumPass) {
      return this.setState({ validate: { ...validate, senha: true } });
    }
    return this.setState({ validate: { ...validate, senha: false } });
  }

  render() {
    const { email, pass, validate } = this.state;

    const handleChange = ({ target }) => {
      const { name, value } = target;
      if (name === 'email') {
        return this.setState({ [name]: value },
          () => { this.validateEmail(); });
      }
      this.setState({ [name]: value },
        () => { this.validateSenha(); });
    };

    const handleClick = () => {
      const { history, userState } = this.props;
      userState({ email, pass });
      history.push('/carteira');
    };

    return (
      <form>
        <input
          type="text"
          name="email"
          value={ email }
          placeholder="Digite seu E-mail"
          data-testid="email-input"
          onChange={ handleChange }
        />
        <input
          type="password"
          name="pass"
          value={ pass }
          placeholder="Digite sua Senha"
          data-testid="password-input"
          onChange={ handleChange }
        />
        <button
          type="submit"
          disabled={ validate.login === false || validate.senha === false }
          onClick={ handleClick }
        >
          Entrar
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  userState: (state) => dispatch(userAct(state)),
});

Login.propTypes = {
  userState: PropTypes.func,
  history: PropTypes.arrayOf(Object),
}.isRequired;

export default connect(null, mapDispatchToProps)(Login);
