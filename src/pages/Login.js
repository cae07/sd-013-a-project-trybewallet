import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { actionLogin } from '../actions';
import './login.css';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      disabled: true,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });

    const { email, password } = this.state;
    const emailValido = /\S+@\S+\.\S+/;
    const minPasswordLength = 4;

    if (emailValido.test(email) && password.length > minPasswordLength) {
      this.setState({
        disabled: false,
      });
    }
  }

  handleClick() {
    const { history, loginToStore } = this.props;
    const { email } = this.state;

    loginToStore(email);

    history.push('/carteira');
  }

  render() {
    const { email, password, disabled } = this.state;

    return (
      <header className="header">
        <h1 className="login-header">LOGIN</h1>
        <form className="login-form">
          <div className="mb-3">
            <label className="form-label" htmlFor="input-email">
              Email:
              <input
                type="email"
                id="input-email"
                data-testid="email-input"
                onChange={ (event) => this.handleChange(event) }
                value={ email }
                name="email"
                placeholder="insira seu email"
                className="form-control form-control-lg"
              />
            </label>
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="input-password">
              Senha:
              <input
                type="password"
                id="input-password"
                data-testid="password-input"
                onChange={ (event) => this.handleChange(event) }
                value={ password }
                name="password"
                placeholder="insira sua senha"
                className="form-control form-control-lg"
              />
            </label>
          </div>
          <button
            type="button"
            onClick={ this.handleClick }
            disabled={ disabled }
            className="btn btn0 test"
          >
            Entrar
          </button>
        </form>
      </header>
    );
  }
}

Login.propTypes = {
  history: PropTypes.objectOf(PropTypes.shape).isRequired,
  loginToStore: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  loginToStore: (email) => dispatch(actionLogin(email)),
});

export default connect(null, mapDispatchToProps)(Login);
