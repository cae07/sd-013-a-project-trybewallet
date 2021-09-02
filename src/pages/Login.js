import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import clickEnter from '../actions/userActions';
import '../css/login.css';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      senha: '',
      disabled: true,
    };
    this.HandleOnChange = this.HandleOnChange.bind(this);
    this.onClick = this.onClick.bind(this);
    this.ValidationLogin = this.ValidationLogin.bind(this);
  }

  onClick() {
    const { email } = this.state;
    const { history, despachaProGlobal } = this.props;
    despachaProGlobal(email);
    history.push('/carteira');
  }

  ValidationLogin(email, senha) {
    const emailRegex = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    const minPasswordSize = 4;
    if (email.match(emailRegex) && senha.length > minPasswordSize) {
      this.setState({
        disabled: false,
      });
    }
  }

  HandleOnChange({ target }) {
    const { email, senha } = this.state;
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
    this.ValidationLogin(email, senha);
  }

  render() {
    const { email, senha } = this.state;
    const { disabled } = this.state;
    return (
      <div className="container-login">
        <form className="form-login">
          <div className="info-login">
            <label
              htmlFor="email-input"
            >
              Email :
              <input
                data-testid="email-input"
                type="email"
                id="email-input"
                name="email"
                value={ email }
                onChange={ this.HandleOnChange }
                placeholder=" digite seu email..."
              />
            </label>
            <label
              htmlFor="password-input"
            >
              Senha :
              <input
                data-testid="password-input"
                id="password-input"
                name="senha"
                onChange={ this.HandleOnChange }
                type="password"
                value={ senha }
                placeholder=" digite sua senha..."
              />
            </label>
          </div>
          <button
            className="button-login"
            type="button"
            disabled={ disabled }
            onClick={ this.onClick }
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape().isRequired,
  despachaProGlobal: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  despachaProGlobal: (payload) => dispatch(clickEnter(payload)),
});

export default connect(null, mapDispatchToProps)(Login);
