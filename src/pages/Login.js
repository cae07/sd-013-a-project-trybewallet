import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { registerUser } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      isValidEmail: false,
      isValidPassword: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.redirect = this.redirect.bind(this);
  }

  validEmail(email) {
    const regex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
    if (regex.test(email)) {
      this.setState({ isValidEmail: true });
    } else {
      this.setState({ isValidEmail: false });
    }
  }

  validPassword(pass) {
    const six = 6;
    if (pass.length >= six) {
      this.setState({ isValidPassword: true });
    } else {
      this.setState({ isValidPassword: false });
    }
  }

  handleChange(event) {
    const { email, password } = this.state;
    const { value, name } = event.target;
    if (name === 'email') {
      this.setState({ email: value });
      this.validEmail(value);
      return email;
    }
    if (name === 'password') {
      this.setState({ password: value });
      this.validPassword(value);
      return password;
    }
  }

  redirect() {
    const { history, emailToDispatch } = this.props;
    const { email } = this.state;
    emailToDispatch(email);
    history.push('/carteira');
  }

  render() {
    const { isValidEmail, isValidPassword } = this.state;
    return (
      <form>
        <p>Trybee</p>
        <input
          name="email"
          data-testid="email-input"
          type="email"
          placeholder="user@email.com"
          onChange={ this.handleChange }
        />
        <input
          name="password"
          data-testid="password-input"
          type="password"
          placeholder="*********"
          onChange={ this.handleChange }
        />
        <button
          type="button"
          disabled={ (isValidEmail && isValidPassword) ? '' : 'disabled' }
          onClick={ this.redirect }
        >
          Entrar
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  emailToDispatch: (payload) => dispatch(registerUser(payload)),
});

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  emailToDispatch: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
// feito com ajuda do Rogerio P. da Silva
