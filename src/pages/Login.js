import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { registerUser } from '../actions';
import './Login.css';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      disabledBtn: true,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin() {
    const { email } = this.state;
    const { registeredUser } = this.props;

    registeredUser(email);
  }

  handleChange(e) {
    const { name, value } = e.target;

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/;

    const validEmailAndPassword = () => {
      const { email, password } = this.state;
      const passwordLength = password.length;
      const maxPasswordLength = 5;

      if (emailPattern.test(email) && passwordLength >= maxPasswordLength) {
        return this.setState({ disabledBtn: false });
      }

      return this.setState({ disabledBtn: true });
    };

    this.setState({
      [name]: value,
    }, validEmailAndPassword());
  }

  render() {
    const { email, password, disabledBtn } = this.state;
    const { userLoginStatus } = this.props;

    if (userLoginStatus) return <Redirect to="/carteira" />;

    return (
      <main className="login-container">
        <form>

          <fieldset>
            <legend>Faça seu Login</legend>
            <div className="email-input">
              <input
                data-testid="email-input"
                name="email"
                value={ email }
                type="email"
                placeholder="Username"
                onChange={ this.handleChange }
              />
            </div>

            <div className="password-input">
              <input
                data-testid="password-input"
                name="password"
                value={ password }
                type="password"
                placeholder="Password"
                onChange={ this.handleChange }
              />
            </div>

            <button
              onClick={ this.handleLogin }
              disabled={ disabledBtn }
              type="button"
            >
              Entrar
            </button>
          </fieldset>

        </form>

      </main>
    );
  }
}

Login.propTypes = {
  userLoginStatus: PropTypes.string.isRequired,
  registeredUser: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  userLoginStatus: state.user.email,
});

const mapDispatchToProps = (dispatch) => ({
  registeredUser: (payload) => dispatch(registerUser(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
