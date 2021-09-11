import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { actionLogin } from '../actions';

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

    loginToStore(this.state);

    history.push('/carteira');
  }

  render() {
    const { email, password, disabled } = this.state;

    return (
      <header>
        <h1>LOGIN</h1>
        <section>
          <form>
            <label htmlFor="input-email">
              Email:
              <input
                type="email"
                id="input-email"
                data-testid="email-input"
                onChange={ (event) => this.handleChange(event) }
                value={ email }
                name="email"
                placeholder="insira seu email"
              />
            </label>
            <label htmlFor="input-password">
              Senha:
              <input
                type="password"
                id="input-password"
                data-testid="password-input"
                onChange={ (event) => this.handleChange(event) }
                value={ password }
                name="password"
                placeholder="insira sua senha"
              />
            </label>
            <button
              type="button"
              onClick={ this.handleClick }
              disabled={ disabled }
            >
              Entrar
            </button>
          </form>
        </section>
      </header>
    );
  }
}

Login.propTypes = {
  history: PropTypes.objectOf(PropTypes.shape).isRequired,
  loginToStore: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  loginToStore: (login) => dispatch(actionLogin(login)),
});

export default connect(null, mapDispatchToProps)(Login);
