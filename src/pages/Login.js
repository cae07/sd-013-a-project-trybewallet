import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { saveEmail } from '../actions';

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
    const { history, dispatchSaveEmail } = this.props;
    const { email } = this.state;
    // Disparamos a nossa action através da função importada
    // de actions.js, que apelidamos de dispatchSetValue
    dispatchSaveEmail(email);
    history.push('/carteira');
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { email, password } = this.state;
    const PASSWORD_LENGTH = 6;
    const validatePassword = password.length >= PASSWORD_LENGTH;
    const validateEmail = () => {
      const re = /\S+@\S+\.\S+/;
      return re.test(email);
    };
    return (
      <div>
        <form>
          <label htmlFor="email">
            <input
              type="email"
              name="email"
              value={ email }
              onChange={ this.handleChange }
              id="email"
              data-testid="email-input"
              placeholder="email"
            />
          </label>
          <label htmlFor="password">
            <input
              type="password"
              name="password"
              value={ password }
              onChange={ this.handleChange }
              id="password"
              data-testid="password-input"
              placeholder="senha"
            />
          </label>
          {/* Parte do disabled foi feita com ajuda a Aline Hoshino */}
          <button
            type="submit"
            disabled={ !(validateEmail() && validatePassword) }
            onClick={ this.onSubmitForm }
          >
            Entrar
          </button>
        </form>

      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatchSaveEmail: (email) => dispatch(saveEmail(email)),
});

Login.propTypes = {
  dispatchSaveEmail: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect(null, mapDispatchToProps)(Login);

/* Links passados pela Aline Hoshino:
https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test
https://medium.com/front-end-weekly/react-tips-disable-buttons-formdata-types-for-function-6c8f23d13b64 */
