import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { saveEmail as saveEmailAction } from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
    this.handleInput = this.handleInput.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
  }

  handleInput({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  validateEmail() {
    const { email } = this.state;
    const pattern = /^\S+@\S+\.\S+$/;
    return pattern.test(email);
  }

  handleBtnClick() {
    const { email } = this.state;
    const { saveEmail, history } = this.props;
    saveEmail({ email });
    history.push('/carteira');
  }

  render() {
    const { email, password } = this.state;
    const MIN_PASSWORD_LENGTH = 6;
    const passwordLength = password.length >= MIN_PASSWORD_LENGTH;

    return (
      <form>
        <input
          type="text"
          name="email"
          data-testid="email-input"
          onChange={ this.handleInput }
          value={ email }
        />
        <input
          type="password"
          name="password"
          data-testid="password-input"
          onChange={ this.handleInput }
          value={ password }
        />
        <button
          type="button"
          disabled={ !(this.validateEmail() && passwordLength) }
          onClick={ this.handleBtnClick }
        >
          Entrar
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  saveEmail: (payload) => dispatch(saveEmailAction(payload)),
});

Login.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  saveEmail: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
