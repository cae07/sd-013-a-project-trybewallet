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
      [event.target.name]: event.target.value,
    });
  }

  validaEmail() {
    const { email } = this.state;
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
  }

  validaPassword() {
    const { password } = this.state;
    const validPassword = 6;
    return password.length >= validPassword; // retorna booleano
  }

  handleClick() {
    const { enviarEmail, history } = this.props;
    const { email } = this.state;
    enviarEmail(email);
    history.push('/carteira');
  }

  render() {
    const { validaPassword, validaEmail } = this;
    const { email, password } = this.state;
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
            disabled={ !(validaPassword() && validaEmail()) }
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

const mapDispatchToProps = (dispatch) => ({
  enviarEmail: (email) => dispatch(salvarStore(email)),
});

export default connect(null, mapDispatchToProps)(Login);
