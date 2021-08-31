import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { recordUser } from '../actions';
// import { Redirect } from 'react-router-dom';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      butto: true,
      senha: '',
      email: '',
      shouldRedirect: true,
    };
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  login(e) {
    e.preventDefault();
    const { state: { email }, props: { dispatchValue } } = this;
    dispatchValue(email);
    this.setState({ shouldRedirect: false });
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
    const { senha, email } = this.state;
    const vali = /\S+@\S+\.\S+/; /* soure: https://www.horadecodar.com.br/2020/09/13/como-validar-email-com-javascript/ */
    const num = 5; /* procura por validações de email */
    if (senha.length >= num && vali.test(email)) {
      this.setState({ butto: false });
    }
  }

  render() {
    const { butto, shouldRedirect } = this.state;
    if (!shouldRedirect) {
      return <Redirect to="/carteira" />;
    }
    return (
      <form onSubmit={ this.login }>
        <div>Login</div>
        <label htmlFor="login">
          E-mail:
          <input
            onChange={ this.handleChange }
            type="email"
            name="email"
            required
            data-testid="email-input"
          />
        </label>
        <label htmlFor="senha">
          Senha:
          <input
            type="text"
            required
            minLength="6"
            name="senha"
            onChange={ this.handleChange }
            data-testid="password-input"
          />
        </label>
        <button type="submit" disabled={ butto }>Entrar</button>
      </form>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  dispatchValue: (user) => dispatch(recordUser(user)),
});

Login.propTypes = {
  dispatchValue: PropTypes.func.isRequired,
};
export default connect(null, mapDispatchToProps)(Login);
