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
    this.handleChange = this.handleChange.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
  }

  onSubmitForm() {
    const { history, emailKey } = this.props;
    // Disparamos a nossa action através da função importada
    // de actions.js, que apelidamos de EmailKey
    const { email } = this.state;
    emailKey(email);
    history.push('/carteira');
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { email, password } = this.state;
    const passwordMin = 6;
    const passwordCorrect = password.length >= passwordMin;
    const validateEmail = () => {
      const re = /\S+@\S+\.\S+/;
      return re.test(email);
    };
    return (
      <div>
        <input
          type="email"
          name="email"
          data-testid="email-input"
          value={ email }
          onChange={ this.handleChange }
        />
        <div>
          <input
            type="password"
            data-testid="password-input"
            name="password"
            value={ password }
            onChange={ this.handleChange }
          />
        </div>
        <button
          type="submit"
          disabled={ !(validateEmail() && passwordCorrect) }
          onClick={ this.onSubmitForm }
        >
          Entrar
        </button>
      </div>
    );
  }
}

Login.propTypes = {
  emailKey: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  emailKey: (email) => dispatch(saveEmail(email)),
}
);

export default connect(null, mapDispatchToProps)(Login);

// https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
// o codigo de validacao do email veio do stackoverflow.
// Nesse link acima o regex significa anystring@anystring.anystring código do stackoverflow
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test
// o test retorna um booleano se o email for válido com o regex da true
// colocando a exclamação nega e daí fica falso com isso o botao ativa.
// https://medium.com/front-end-weekly/react-tips-disable-buttons-formdata-types-for-function-6c8f23d13b64
// do link medium veio a ideia de negar o botao.
// Baseado no exercício 16.2 usesi o history.push.
