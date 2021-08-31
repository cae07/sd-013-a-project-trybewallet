import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { recordUser } from '../actions';
// import { Redirect } from 'react-router-dom';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      butto: true,
    };
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  login(e) {
    e.preventDefault();
    const { state: { email }, props: { dispatchValue } } = this;
    // const { dispatchValue } = this.;
    dispatchValue(email);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { butto } = this.state;
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
