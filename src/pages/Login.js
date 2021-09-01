import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginName } from '../actions';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      validate: {
        login: false,
        password: false,
      },
    };
    this.emailValidation = this.emailValidation.bind(this);
    this.passwordValidation = this.passwordValidation.bind(this);
  }

  emailValidation() {
    const { email, validate } = this.state;
    const EMAIL_VALIDATION = /^[\w]+@([\w]+\.)+[\w]{2,4}$/gi;
    if (EMAIL_VALIDATION.test(email)) {
      return this.setState({ // bug achado com ajuda de rogerio p. da silva
        validate: {
          ...validate,
          login: true,
        },
      });
    }
    this.setState({ validate: { ...validate, login: false } });
  }

  passwordValidation() {
    const { password, validate } = this.state;
    const MIN_PASSWORD_LENGTH = 6;
    if (password.length >= MIN_PASSWORD_LENGTH) {
      return this.setState({
        validate: {
          ...validate,
          password: true,
        },
      });
    }
    this.setState({ validate: { ...validate, password: false } });
  }

  render() {
    const { email, password, validate } = this.state;

    const handleChange = ({ target }) => {
      const { name, value } = target;
      if (name === 'email') {
        return this.setState({ [name]: value },
          () => { this.emailValidation(); });
      }
      this.setState({ [name]: value },
        () => { this.passwordValidation(); });
    };

    const handleClick = () => {
      const { history, loginName } = this.props;
      loginName({ email, password });
      history.push('/carteira');
    };

    return (
      <main>
        <form>
          <input
            type="text"
            name="email"
            value={ email }
            onChange={ handleChange }
            data-testid="email-input"
          />
          <input
            type="password"
            name="password"
            value={ password }
            onChange={ handleChange }
            data-testid="password-input"
          />
          <button
            type="submit"
            disabled={ validate.login === false || validate.password === false }
            onClick={ handleClick }
          >
            Entrar
          </button>
        </form>
      </main>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  loginName: (payload) => dispatch(loginName(payload)),
});

Login.propTypes = {
  loginName: PropTypes.func,
  history: PropTypes.arrayOf(Object),
}.isRequired;

export default connect(null, mapDispatchToProps)(Login);
