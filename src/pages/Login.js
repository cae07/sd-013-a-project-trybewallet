import React from 'react';
import { connect } from 'react-redux';
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

  handleLogin(e) {
    e.preventDefault();
    const { email, password } = this.state;
  }

  handleChange(e) {
    const { name, value } = e.target;

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/;

    const validEmailAndPassword = () => {
      const { email, password } = this.state;
      const passwordLength = password.length;
      const maxPasswordLength = 6;

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

    return (
      <main className="login-container">
        <form>

          <fieldset>
            <legend>Faça seu Login</legend>
            <div data-testid="email-input" className="email-input">
              <input
                name="email"
                value={ email }
                type="text"
                placeholder="Username"
                onChange={ this.handleChange }
              />
            </div>

            <div data-testid="password-input" className="password-input">
              <input
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
              type="submit"
            >
              Entrar
            </button>
          </fieldset>

        </form>

      </main>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.userReducer,
});

export default connect(mapStateToProps)(Login);
