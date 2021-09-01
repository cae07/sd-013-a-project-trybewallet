import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getEmail } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      button: true,
      checkIsEmail: false,
      checkIsPassword: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.renderInputs = this.renderInputs.bind(this);
    this.validadeLogin = this.validadeLogin.bind(this);
    this.validadeUser = this.validadeUser.bind(this);
    this.validadePassword = this.validadePassword.bind(this);
    this.goTo = this.goTo.bind(this);
  }

  // usado regex
  validadeUser(email) {
    if (email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      this.setState({ checkIsEmail: true }, () => this.validadeLogin());
    } else {
      this.setState({ checkIsEmail: false }, () => this.validadeLogin());
    }
  }

  validadePassword(password) {
    const min = 6;
    if (password.length >= min) {
      this.setState({ checkIsPassword: true }, () => this.validadeLogin());
    } else {
      this.setState({ checkIsPassword: false }, () => this.validadeLogin());
    }
  }

  validadeLogin() {
    const { checkIsEmail, checkIsPassword } = this.state;
    return checkIsEmail && checkIsPassword
      ? this.setState({ button: false }) : this.setState({ button: true });
  }

  handleChange({ target }) {
    const { id, value } = target;

    this.setState({ [id]: value });

    if (id === 'email') {
      this.validadeUser(value);
    }

    if (id === 'password') {
      this.validadePassword(value);
    }
  }

  goTo() {
    const { history, storeEmail } = this.props;
    const { email } = this.state;
    storeEmail(email);
    history.push('/carteira');
  }

  renderInputs() {
    const { email, password } = this.state;
    return (
      <>
        <label htmlFor="email">
          Email:
          <input
            data-testid="email-input"
            value={ email }
            id="email"
            type="email"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="password">
          Senha:
          <input
            data-testid="password-input"
            value={ password }
            id="password"
            type="password"
            onChange={ this.handleChange }
          />
        </label>
      </>);
  }

  render() {
    const { button } = this.state;
    return (
      <>
        <h1>Trybe Wallet</h1>
        <form>
          {this.renderInputs()}
          <button
            disabled={ button }
            type="button"
            onClick={ this.goTo }
          >
            Entrar
          </button>
        </form>
      </>
    );
  }
}

const mapDispatch = (dispatch) => ({
  storeEmail: (payload) => dispatch(getEmail(payload)),
});

Login.propTypes = {
  history: PropTypes.object,
}.isRequired;

export default connect(null, mapDispatch)(Login);
