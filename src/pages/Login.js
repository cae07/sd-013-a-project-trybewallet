import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { recordUser } from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      button: true,
      senha: '',
      email: '',
      shouldRedirect: true,
    };
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  login(e) {
    const { state: { email }, props: { dispatchValue } } = this;
    dispatchValue(email);
    // history.push('/carteira');
    this.setState({ shouldRedirect: false });
    e.preventDefault();
  }

  // newRouter() {
  //   const { props: { history }, state: { button } } = this;
  //   if (!button) {
  //     history.push('/carteira');
  //   }
  // }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
    const { senha, email } = this.state;
    const vali = /\S+@\S+\.\S+/; /* soure: https://www.horadecodar.com.br/2020/09/13/como-validar-email-com-javascript/ */
    const num = 5; /* procura por validações de email */
    if (senha.length >= num && vali.test(email)) {
      this.setState({ button: false });
    }
  }

  render() {
    const { button, shouldRedirect } = this.state;
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
        <button type="submit" disabled={ button }>Entrar</button>
      </form>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  dispatchValue: (user) => dispatch(recordUser(user)),
});

Login.propTypes = {
  dispatchValue: PropTypes.func.isRequired,
  // history: PropTypes.objectOf.isRequired,
};
export default connect(null, mapDispatchToProps)(Login);
