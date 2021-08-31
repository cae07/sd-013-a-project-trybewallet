import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { saveEmail } from '../actions';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
    };

    this.onSubmitLogin = this.onSubmitLogin.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  onSubmitLogin() {
    const { history, getEmail } = this.props;
    const { email } = this.state;
    getEmail(email);
    history.push('/carteira');
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { email, password } = this.state;
    const passwordLength = 6;
    const passwordCorrect = password.length >= passwordLength;
    const verifiedEmail = () => {
      const result = /\S+@\S+\.\S+/;
      return result.test(email);
    };

    return (
      <fieldset>
        <input
          type="text"
          name="email"
          data-testid="email-input"
          onChange={ this.handleChange }
        />
        <input
          type="text"
          name="password"
          data-testid="password-input"
          onChange={ this.handleChange }
        />
        <button
          type="submit"
          disabled={ !(verifiedEmail() && passwordCorrect) }
          onClick={ this.onSubmitLogin }
        >
          Entrar
        </button>
      </fieldset>
    );
  }
}

Login.propTypes = {
  getEmail: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  getEmail: (email) => dispatch(saveEmail(email)),
});

export default connect(null, mapDispatchToProps)(Login);
