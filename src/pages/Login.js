import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginSubmit } from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      validateLogin: true,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value }, () => {
      // chamar função para verificar as validações
      const { email, password } = this.state;
      const regexEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+?$/i;
      const boolValidateEmail = regexEmail.test(email);
      const minLengthPassword = 6;
      const boolValidatePassword = (password.length >= minLengthPassword);
      const boolValidationLogin = !(boolValidateEmail && boolValidatePassword);
      this.setState({
        validateLogin: boolValidationLogin,
      });
    });
  }

  handleClick() {
    const { history, pushUser } = this.props;
    const { email } = this.state;
    pushUser(email); // action para atualizar a store
    history.push('/carteira');
  }

  render() {
    const { email, password, validateLogin } = this.state;
    return (
      <div>
        Login Trybe Wallet
        <input
          type="email"
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
          placeholder="Senha"
          onChange={ this.handleChange }
          value={ password }
        />
        <button
          type="button"
          onClick={ this.handleClick }
          disabled={ validateLogin }
          // ambos precisam ser true para disable = false
          // qualquer um false resulta em disable = true
        >
          Entrar
        </button>
      </div>
    );
  }
}

Login.propTypes = {
  history: propTypes.shape({
    action: propTypes.string,
    block: propTypes.func,
    createHref: propTypes.func,
    go: propTypes.func,
    goBack: propTypes.func,
    goForward: propTypes.func,
    length: propTypes.number,
    listen: propTypes.func,
    location: propTypes.objectOf(propTypes.string),
    push: propTypes.func,
    replace: propTypes.func,
  }).isRequired,
  pushUser: propTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  ...state,
});

const mapDispatchToProps = (dispatch) => ({
  pushUser: (email) => dispatch(loginSubmit(email)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
