import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import login from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      isDisabled: true,
    };

    this.handleChange = this.handleChange.bind(this);
    this.activeButton = this.activeButton.bind(this);
    this.addUser = this.addUser.bind(this);
  }

  addUser(event) {
    event.preventDefault();
    const { userEmail } = this.props;
    const { email } = this.state;
    userEmail(email); // tem dispatch
    const { history } = this.props;
    history.push('/carteira');
  }

  handleChange({ target }) {
    this.setState({ [target.name]: target.value }, () => {
      this.activeButton();
    });
  }

  activeButton() {
    const { email, password } = this.state;
    const minPasswordLength = 6;
    const validEmail = (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email));
    this.setState({ isDisabled: !(password.length >= minPasswordLength && validEmail) });
  }

  render() {
    const { email, password, isDisabled } = this.state;
    return (
      <div>
        <form onSubmit={ this.addUser }>
          <label htmlFor="email-login">
            Email:
            <input
              data-testid="email-input"
              id="email-login"
              type="text"
              placeholder="Digite seu Email"
              onChange={ this.handleChange }
              name="email"
              value={ email }
            />
          </label>
          <label htmlFor="password-login">
            Senha:
            <input
              data-testid="password-input"
              id="password-login"
              type="password"
              placeholder="Digite sua senha"
              name="password"
              value={ password }
              onChange={ this.handleChange }
            />
          </label>
          <button
            className="enter"
            type="submit"
            disabled={ isDisabled }
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  userEmail: (email) => dispatch(login(email)),
});

Login.propTypes = {
  userEmail: propTypes.func.isRequired,
  history: propTypes.objectOf(propTypes.object).isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
