import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { registerUser } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      disabled: true,
    };

    this.handleInputs = this.handleInputs.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin(evt) {
    evt.preventDefault();
    const { /* email, password */ } = this.state;
  }

  handleInputs({ target: { type, value } }) {
    this.setState({ [type]: value }, () => {
      const { email, password } = this.state;
      const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
      const magNum = 6;
      if (emailRegex.test(email) && password.length >= magNum) {
        this.setState({ disabled: false });
      } else {
        this.setState({ disabled: true });
      }
    });
  }

  render() {
    const { email, password, disabled, isLogged } = this.state;
    const { handleInputs, handleLogin } = this;

    if (isLogged) return <Redirect to="/batata" />;

    return (
      <div className="login-container">
        <form className="login-form">
          <h3 className="login-heading">This is a login</h3>
          <input
            data-testid="email-input"
            className="login-email"
            type="email"
            placeholder="Email"
            value={ email }
            onChange={ handleInputs }
          />
          <input
            data-testid="password-input"
            className="login-password"
            type="password"
            placeholder="Password"
            value={ password }
            onChange={ handleInputs }
          />
          <button
            className="login-btn"
            type="button"
            disabled={ disabled }
            onClick={ handleLogin }
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loginStatus: state.user.email,
});

const mapDispatchToProps = (dispatch) => ({
  loginStatus: (payload) => dispatch(registerUser(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
