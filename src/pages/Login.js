import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginSubmit } from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      // wallet: {
      //   currencies: [],
      //   expenses: [],
      // },
      buttonState: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    this.setState({
      email: event.target.value,
    });
  }

  handleChangePassword({ target }) {
    const { email } = this.state;
    const tamanhoSenha = 6;
    const regexEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+?$/i;
    const boolValidateEmail = regexEmail.test(email);
    console.log(target.value.length);
    const validatePassword = (target.value.length >= tamanhoSenha);
    const validateButton = !(validatePassword && boolValidateEmail);
    this.setState({
      buttonState: validateButton,
    });
  }

  handleClick() {
    const { history, loginSubmiUser } = this.props;
    const { email } = this.state;
    const emailPadrao = 'alguem@email.com';
    if (emailPadrao === email) {
      loginSubmiUser({ email });
      history.push('/carteira');
    }
  }

  render() {
    const { buttonState } = this.state;
    return (
      <section>
        <div>Login</div>
        <input
          type="email"
          data-testid="email-input"
          onChange={ this.handleChange }
        />
        <input
          type="password"
          data-testid="password-input"
          onChange={ this.handleChangePassword }
        />
        <button
          type="button"
          id="buttonValid"
          disabled={ buttonState }
          onClick={ this.handleClick }
        >
          Entrar
        </button>
      </section>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  loginSubmiUser: (usuario) => dispatch(loginSubmit(usuario)),
});

Login.propTypes = {
  history: PropTypes.func,
}.isRequired;

export default connect(null, mapDispatchToProps)(Login);
