import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { userAction } from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      button: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.verifyInputs = this.verifyInputs.bind(this);
  }

  // Recebe os valores dos inputs (email e password) e muda o estado do componente;
  handleChange({ target }) {
    const { name, value } = target;
    const { verifyInputs } = this;
    this.setState({ [name]: value },
      verifyInputs);
  }

  // Ao ser clicado, redireciona para a página (/carteira) e salva o email no estado da aplicação;
  handleClick() {
    const { email, button } = this.state;
    const { history, dispatchInputLogin } = this.props;
    dispatchInputLogin(email);
    if (button === false) history.push('/carteira');
  }

  // Função inpirada no código do Gustavo Jezini;
  // Verifica se os campos de input de login foram preenchidos da forma requerida pela aplicação;
  verifyInputs() {
    const verifyEmail = /.+@.+\.[A-Za-z]+$/;
    const verifyPassword = 5;
    const { email, password } = this.state;
    if (verifyEmail.test(email) && password.length > verifyPassword) {
      // eslint-disable-next-line react/no-unused-state
      this.setState({ button: false });
    // eslint-disable-next-line react/no-unused-state
    } else { this.setState({ button: true }); }
  }

  render() {
    const { handleChange, handleClick,
      state: { button } } = this;
    return (
      <div>
        <h1>Trybe Wallet</h1>
        <input
          type="text"
          name="email"
          onChange={ handleChange }
          placeholder="Email"
          data-testid="email-input"
        />
        <input
          type="text"
          name="password"
          onChange={ handleChange }
          placeholder="Senha"
          data-testid="password-input"
        />
        <button
          type="submit"
          onClick={ handleClick }
          disabled={ button }
        >
          Entrar
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatchInputLogin: (state) => dispatch(userAction(state)),
});

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  dispatchInputLogin: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
