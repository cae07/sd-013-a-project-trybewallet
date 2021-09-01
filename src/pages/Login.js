import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { sendUserInfo } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { // setando estado inicial (local) do componente
      invalidEmail: true,
      invalidPassword: true,
      user: {
        email: '',
        password: '',
      },
      authenticated: false,
    };
    this.validateEmail = this.validateEmail.bind(this); // bind validateEmail;
    this.validatePassword = this.validatePassword.bind(this); // bind validatePassword;
    this.formSubmit = this.formSubmit.bind(this); // bind formSubmit;
  }

  validateEmail({ target }) { // nessa função, utilizamos Regex para validação do campo de email.
    const { user } = this.state;
    const { value } = target;
    // Obg Gessé pelo Regex maroto!@S+
    const regex = /\S+@\S+\.\S+/; // lógica já feita do Regex.
    if (regex.test(value)) { // se o valor do input corresponder o formato esperado pelo Regex, a chave invalidEmail irá ser false, ou seja, o email é valido.
      return this.setState({
        invalidEmail: false,
        user: { ...user, email: value }, // inserimos no state local user o valor do input de email.
      });
    } return this.setState({ // essa segunda condição se dá pela necessidade de, quando um email for digitado e validado, se ele for apagado a validação volta a ser requerida.
      invalidEmail: true,
      user: { ...user, email: value },
    });
  }

  validatePassword({ target }) { // validação da senha com o requisito especificado (mín 6 caractéres)
    const { user } = this.state;
    const { value } = target;
    const MIN_LENGTH_PASSWORD = 6; // atribuímos a uma const por conta do Magic Number.
    if (value.length >= MIN_LENGTH_PASSWORD) { // lógica para alterarmos o state, se o valor do input tiver mais de 6 caractéres a chave invalidPassword passa a ser false e atribuimos a chave password o value do target.
      return this.setState({
        invalidPassword: false,
        user: { ...user, password: value },
      });
    } return this.setState({ // mesma lógica anterior de, se o campo for apagado, a validação precisa acontecer novamente.
      invalidPassword: true,
      user: { ...user, password: value },
    });
  }

  formSubmit(e) {
    e.preventDefault();
    const { user: { email, password } } = this.state;
    const { submitUser } = this.props;
    submitUser(({ email, password }));
    this.setState({ authenticated: true });
  }

  render() {
    const { invalidPassword, invalidEmail, authenticated } = this.state;
    if (authenticated) return <Redirect to="/carteira" />;
    return (
      <form onSubmit={ this.formSubmit }>
        <label htmlFor="login">
          <input
            id="login"
            type="text"
            data-testid="email-input"
            placeholder="Email"
            onChange={ this.validateEmail }
            name="email"
          />
        </label>
        <label htmlFor="password">
          <input
            id="password"
            type="password"
            data-testid="password-input"
            placeholder="Senha"
            onChange={ this.validatePassword }
            name="password"
          />
        </label>
        <button
          type="submit"
          disabled={ invalidEmail || invalidPassword }
        >
          Entrar
        </button>
      </form>
    );
  }
}

Login.propTypes = {
  submitUser: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  submitUser: (user) => dispatch(sendUserInfo(user)),
});

export default connect(null, mapDispatchToProps)(Login);
