import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginAction } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: '',
      password: '',
      disableButton: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.checkUser = this.checkUser.bind(this);
  }

  checkUser() {
    const { login, password } = this.state;
    const emailLength = 5;
    const regex = /\S+@\S+\.\S+/;
    if (password.length > emailLength && regex.test(login)) {
      this.setState({
        disableButton: false,
      });
    } else {
      this.setState({
        disableButton: true,
      });
    }
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    }, () => this.checkUser());
  }

  render() {
    const { disableButton, login, password } = this.state;
    const { dispatchLogin } = this.props;
    return (
      <div>
        <h1>Login</h1>
        <input
          type="text"
          name="login"
          value={ login }
          placeholder="E-mail"
          data-testid="email-input"
          onChange={ this.handleChange }
        />
        <h1>Password</h1>
        <input
          type="email"
          name="password"
          value={ password }
          placeholder="Senha"
          data-testid="password-input"
          onChange={ this.handleChange }
        />
        <button
          type="button"
          disabled={ disableButton }
          onClick={ () => dispatchLogin(login) }
        >
          <Link to="/carteira">
            Entrar
          </Link>
        </button>
      </div>
    );
  }
}

const mapDispatchtoProps = (dispatch) => ({
  dispatchLogin: (login) => dispatch(loginAction(login)),
});

Login.propTypes = {
  dispatchLogin: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchtoProps)(Login);
