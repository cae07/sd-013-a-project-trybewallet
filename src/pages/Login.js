import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { actionUserLogin } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      validation: true,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    const { email, password } = this.state;
    this.setState({
      [name]: value,
    });

    const validPassword = 5;
    const validEmail = /\S+@\S+\.\S+/;

    if (validEmail.test(email) && password.length >= validPassword) {
      this.setState({
        validation: false,
      });
    }
  }

  handleClick() {
    const { handleUserLogin, history } = this.props;
    handleUserLogin(this.state);
    this.setState({
      test: false,
    });
    history.push('/carteira');
  }

  render() {
    const { email, password, validation } = this.state;

    return (
      <form>
        <h1>Página de Login</h1>
        <label htmlFor="input-email">
          E-mail:
          <input
            data-testid="email-input"
            onChange={ (event) => this.handleChange(event) }
            value={ email }
            name="email"
            type="email"
            id="input-email"
          />
        </label>
        <label htmlFor="input-password">
          Senha:
          <input
            minLength="6"
            maxLength="12"
            data-testid="password-input"
            onChange={ (event) => this.handleChange(event) }
            value={ password }
            name="password"
            type="password"
            id="input-password"
          />
        </label>
        <button
          disabled={ validation }
          id="input-button"
          type="button"
          onClick={ this.handleClick }
        >
          Entrar
        </button>
      </form>
    );
  }
}

Login.propTypes = {
  handleUserLogin: PropTypes.func.isRequired,
  history: PropTypes.objectOf(PropTypes.shape).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  handleUserLogin: (payload) => dispatch(actionUserLogin(payload)),
});

export default connect(null, mapDispatchToProps)(Login);
