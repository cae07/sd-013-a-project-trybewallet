import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { userEmail } from '../actions/index';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      disabled: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.validBtn = this.validBtn.bind(this);
    this.onSubmitLogin = this.onSubmitLogin.bind(this);
  }

  onSubmitLogin() {
    const { history, dispatchSetValue } = this.props;
    dispatchSetValue(this.state);
    history.push('/carteira');
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    }, () => this.validBtn());
  }

  validateEmail(email) {
    const isValid = email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
    if (!isValid || email.lenght === 0) {
      return 'Invalid email.';
    }
    return '';
  }

  validatePassword(password) {
    const isValidPass = password.match(/^(?=.*[a-za-z])(?=.*\d)[a-za-z\d]{6,}$/i);
    if (!isValidPass || password.lenght === 0) {
      return 'A senha deve conter 6 caracteres incluindo letras e numeros.';
    }
    return '';
  }

  validBtn() {
    const { email, password } = this.state;
    const isValidEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    const isValidPass = 6;
    if (password.length >= isValidPass && isValidEmail.test(email)) {
      this.setState({
        disabled: false,
      });
    } else {
      this.setState({
        disabled: true,
      });
    }
  }

  render() {
    const { email, password, disabled } = this.state;
    return (
      <section>
        <form>
          <label htmlFor="email">
            Email:
            <input
              type="email"
              value={ email }
              name="email"
              id="email"
              data-testid="email-input"
              required="required"
              onChange={ this.handleChange }
            />
            <span className="">{this.validateEmail(email)}</span>
          </label>
          <br />
          <label htmlFor="password">
            Password:
            <input
              type="password"
              value={ password }
              name="password"
              id="password"
              data-testid="password-input"
              onChange={ this.handleChange }
            />
            <span className="">{this.validatePassword(password)}</span>
          </label>
          <button type="submit" disabled={ disabled } onClick={ this.onSubmitLogin }>
            Entrar
          </button>
        </form>
      </section>
    );
  }
}

Login.propTypes = {
  history: PropTypes.object,
}.isRequired;

const mapDispatchToProps = (dispatch) => ({
  dispatchSetValue: (payload) => dispatch(userEmail(payload)),
});

export default connect(null, mapDispatchToProps)(Login);

// Pagina foi baseada no exercicio do bloco 16.3, forms Redux, pricipalmente a função onsubmit e o mapDispatchToProps
