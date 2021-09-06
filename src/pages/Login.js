import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setLogin } from '../actions';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
  }

  onSubmitForm() {
    const { email, password } = this.state;
    const { history, submitLogin } = this.props;
    submitLogin(email, password);
    history.push('/carteira');
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    const passwordLength = 6;
    const { email, password } = this.state;
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email);
    return (
      <form>
        <label htmlFor="email">
          Email
          <input
            data-testid="email-input"
            type="email"
            id="email"
            name="email"
            value={ email }
            onChange={ (e) => this.handleChange(e) }
          />
        </label>
        <label htmlFor="password">
          Senha
          <input
            data-testid="password-input"
            type="password"
            id="password"
            name="password"
            value={ password }
            onChange={ (e) => this.handleChange(e) }
          />
        </label>
        <button
          type="button"
          disabled={ !emailRegex || password.length < passwordLength }
          onClick={ this.onSubmitForm }
        >
          Entrar
        </button>
      </form>);
  }
}

Login.propTypes = {
  submitLogin: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  submitLogin: (...payload) => dispatch(setLogin(...payload)),
});
export default connect(null, mapDispatchToProps)(Login);
