import { connect } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import setLoginValue from '../actions/setLogin';

const regexEmail = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i;
const minCaracter = 6;

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.submitLogin = this.submitLogin.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      email: '',
      password: '',
    };
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  submitLogin() {
    const { dispatchUserValue } = this.props;
    dispatchUserValue(this.state);
  }

  render() {
    const { email, password } = this.state;
    const statusButton = !(regexEmail.test(email) && password.length >= minCaracter);
    return (
      <div>
        <label htmlFor="email-input">
          Email:
          <input
            type="text"
            data-testid="email-input"
            id="email-input"
            name="email"
            onChange={ this.handleChange }
            value={ email }
          />
        </label>
        <label htmlFor="password-input">
          Senha:
          <input
            type="text"
            data-testid="password-input"
            id="password-input"
            name="password"
            onChange={ this.handleChange }
            value={ password }
          />
        </label>
        <Link to="/carteira">
          <button
            disabled={ statusButton }
            type="button"
            id="button-login"
            onClick={ this.submitLogin }
          >
            Entrar
          </button>
        </Link>
      </div>
    );
  }
}

Login.propTypes = {
  dispatchUserValue: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  user: {
    email: state.email,
    password: state.password,
  },
});

const mapDispatchToProps = (dispatch) => ({
  dispatchUserValue: (value) => dispatch(setLoginValue(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
