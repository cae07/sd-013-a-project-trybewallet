import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { setUserEmail } from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      senha: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.testInputs = this.testInputs.bind(this);
  }

  handleChange({ target }) {
    const { id, value } = target;
    this.setState({
      [id]: value,
    });
  }

  testInputs() {
    const { email, senha } = this.state;
    const patternEmail = /\S+@\S+\.\S+/;
    const testEmail = patternEmail.test(email);
    const minChars = 6;
    if (testEmail && senha.length >= minChars) return false;
    return true;
  }

  render() {
    const { email, senha } = this.state;
    const { handleClick } = this.props;
    const disableButton = this.testInputs();
    return (
      <div>
        <img src="" alt="" />
        <label htmlFor="email">
          Email:
          <input
            id="email"
            value={ email }
            onChange={ this.handleChange }
            data-testid="email-input"
            type="text"
          />
        </label>
        <label htmlFor="senha">
          Senha:
          <input
            id="senha"
            value={ senha }
            onChange={ this.handleChange }
            data-testid="password-input"
            type="password"
          />
        </label>
        <Link to="/carteira">
          <button
            type="button"
            onClick={ () => handleClick(email) }
            disabled={ disableButton }
          >
            Entrar
          </button>
        </Link>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  handleClick: (email) => dispatch(setUserEmail(email)),
});

Login.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
