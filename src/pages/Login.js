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
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  handleClick() {
    const { history, pushUser } = this.props;
    const { email, password } = this.state;
    pushUser(email, password);
    // disparar uma action que vai atualizar a store
    // Redirecionar para a rota login
    history.push('/wallet');
  }

  render() {
    const { email, password } = this.state;
    return (
      <div>
        Login Trybe Wallet
        <input
          type="text"
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
        >
          Entrar
        </button>
      </div>
    );
  }
}

Login.propTypes = {
  history: propTypes.string.isRequired,
  pushUser: propTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  pushUser: (email, password) => dispatch(loginSubmit(email, password)),
});

export default connect(null, mapDispatchToProps)(Login);
