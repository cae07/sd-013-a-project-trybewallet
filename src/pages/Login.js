import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { loginEmail } from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      disable: true,
      redirectToCarteira: false,
    };
    this.onclick = this.onclick.bind(this);
    this.activateButton = this.activateButton.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onclick() {
    const { email } = this.state;
    const { userLogin } = this.props;
    const emailValue = document.getElementById('email');
    const passwordValue = document.getElementById('senha');
    this.setState({
      email: emailValue.value,
      password: passwordValue.value,
      redirectToCarteira: true,
    });
    userLogin(email);
  }

  onChange() {
    const valueEmail = document.getElementById('email');
    const valuePassword = document.getElementById('senha');
    this.setState({
      email: valueEmail.value,
      password: valuePassword.value,
    });
    this.activateButton();
  }

  activateButton() {
    const { email, password } = this.state;
    const validPassword = 5;
    const validEmail = /\S+@\S+\.\S+/;
    if (password.length >= validPassword && validEmail.test(email)) {
      this.setState({
        disable: false,
      });
    } else {
      this.setState({
        disable: true,
      });
    }
  }

  render() {
    const { disable, redirectToCarteira } = this.state;
    return (
      <div>
        <input
          id="email"
          onChange={ this.onChange }
          data-testid="email-input"
          type="email"
          placeholder="Email"
          required
        />
        <input
          id="senha"
          onChange={ this.onChange }
          minLength="5"
          data-testid="password-input"
          type="password"
          placeholder="senha"
          required
        />
        <div>
          <button
            onClick={ this.onclick }
            disabled={ disable }
            type="button"
          >
            Entrar
          </button>
        </div>
        {redirectToCarteira ? <Redirect to="/carteira" /> : ''}
      </div>);
  }
}

const mapDispatchToProps = (dispatch) => ({
  userLogin: (payload) => dispatch(loginEmail(payload)),
});
export default connect(null, mapDispatchToProps)(Login);

Login.propTypes = {
  userLogin: PropTypes.func.isRequired,
};
