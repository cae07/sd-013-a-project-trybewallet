import React from 'react';
import { connect } from 'react-redux';
import Proptypes from 'prop-types';
import { Email } from '../actions';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      login: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleClick() {
    const { email } = this.state;
    const { inputValue, history } = this.props;
    inputValue(email);
    history.push('./carteira');
  }

  render() {
    const { handleChange, handleClick } = this;
    const { email, password } = this.state;
    const minPassword = 6;
    const validatePassword = password.length >= minPassword;
    // https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
    const validateEmail = () => {
      const regex = /\S+@\S+\.\S+/;
      return regex.test(email);
    };

    return (
      <>
        <form>
          <input
            value={ email }
            data-testid="email-input"
            name="email"
            placeholder="Digite seu email"
            onChange={ handleChange }
          />
          <input
            value={ password }
            data-testid="password-input"
            name="password"
            placeholder="Digite sua senha"
            onChange={ handleChange }
          />
        </form>
        <button
          type="button"
          onClick={ handleClick }
          disabled={ !(validateEmail() && validatePassword) }
        >
          Entrar
        </button>
      </>);
  }
}

const mapDispatchToProps = (dispatch) => ({
  inputValue: (state) => dispatch(Email(state)) });

Login.propTypes = {
  inputValue: Proptypes.func,
  history: Proptypes.shape(),
  login: Proptypes.func,
}.isRequired;

export default connect(null, mapDispatchToProps)(Login);
