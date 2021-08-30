import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import trybeLogo from '../images/trybeLogo.png';
import { getEmail } from '../actions';

const validEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+$/i;
const six = 6;

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleOnChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  handleClick() {
    const { history, emailValid } = this.props;
    const { email } = this.state;

    history.push('/carteira');
    emailValid(email);
  }

  inputEmail() {
    const { email } = this.state;
    return (
      <label htmlFor="email">
        <input
          className="inputEmail"
          data-testid="email-input"
          type="text"
          value={ email }
          onChange={ this.handleOnChange }
          id="email"
          name="email"
          placeholder="exemplo@email.com"
        />
      </label>
    );
  }

  inputPassword() {
    const { password } = this.state;
    return (
      <label htmlFor="password">
        <input
          className="inputPassword"
          data-testid="password-input"
          type="password"
          value={ password }
          onChange={ this.handleOnChange }
          id="password"
          name="password"
          placeholder="password"
        />
      </label>
    );
  }

  buttonEnter() {
    const { email, password } = this.state;
    return (
      <button
        type="button"
        className="buttonEnter"
        onClick={ this.handleClick }
        disabled={ !(validEmail.test(email) && password.length >= six) }
      >
        Entrar
      </button>
    );
  }

  render() {
    return (
      <div>
        <form className="form-container">
          <div className="form-container2">
            <img src={ trybeLogo } alt="trybeLogo" width="200px" />
            <div className="forms-login">
              {this.inputEmail()}
              {this.inputPassword()}
              {this.buttonEnter()}
            </div>
          </div>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  emailValid: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  emailValid: (email) => dispatch(getEmail(email)),
});

export default connect(null, mapDispatchToProps)(Login);
