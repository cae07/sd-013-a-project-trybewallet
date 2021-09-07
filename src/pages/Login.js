import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { actionUser } from '../actions';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  handleClick() {
    const { history, emailOk } = this.props;
    const { email } = this.state;
    emailOk({ email });
    history.push('/carteira');
  }

  render() {
    const { email, password } = this.state;
    // https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
    const validateEmail = () => {
      const re = /\S+@\S+\.\S+/;
      return re.test(email);
    };
    const minPassword = 6;
    const validatePassword = password.length >= minPassword;

    return (
      <form>
        <input
          value={ email }
          id="email"
          name="email"
          data-testid="email-input"
          onChange={ this.handleChange }
        />
        Email
        <input
          value={ password }
          name="password"
          type="password"
          data-testid="password-input"
          onChange={ this.handleChange }
          className="password"
        />
        Senha
        <button
          disabled={ !(validateEmail() && validatePassword) }
          type="submit"
          onClick={ this.handleClick }
        >
          Entrar
        </button>
      </form>
    );
  }
}

Login.propTypes = {
  emailOk: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

const mapDispatcToProps = (dispatch) => ({
  emailOk: (payload) => dispatch(actionUser(payload)),
});

export default connect(null, mapDispatcToProps)(Login);
