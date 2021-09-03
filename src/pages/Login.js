import React from 'react';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setLogin } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      redirect: false,
    };
    this.onClick = this.onClick.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onClick() {
    this.setState({ redirect: true });
    const { email } = this.state;
    const { setLoginOnState } = this.props;
    setLoginOnState(email);
  }

  onChange() {
    const emailDig = document.getElementById('email');
    const passwordDig = document.getElementById('password');
    this.setState({
      email: emailDig.value,
      password: passwordDig.value,
    });
  }

  render() {
    const { email, password, redirect } = this.state;
    const REG_EX_EMAIL = /^([\w\d._\-#])+@([\w\d._\-#]+[.][\w\d._\-#]+)+$/;
    const minLength = 6;
    if (redirect) { return <Redirect to="/carteira" />; }
    return (
      <div>
        <input
          id="email"
          data-testid="email-input"
          placeholder="E-mail"
          onChange={ this.onChange }
        />
        <input
          id="password"
          data-testid="password-input"
          placeholder="Password"
          onChange={ this.onChange }
        />
        <button
          type="button"
          disabled={ !REG_EX_EMAIL.test(email) || password.length < minLength }
          onClick={ this.onClick }
        >
          Entrar
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setLoginOnState: (payload) => dispatch(setLogin(payload)),
});

export default connect(null, mapDispatchToProps)(Login);

Login.propTypes = {
  setLoginOnState: PropTypes.func.isRequired,
};
