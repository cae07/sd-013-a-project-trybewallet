import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setUser } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      disabledButton: true,
    };

    this.handleChange = this.handleChange.bind(this);
    this.enableButton = this.enableButton.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange({ target }) {
    this.setState({ [target.name]: target.value });
    this.enableButton();
  }

  enableButton() {
    const { email, password } = this.state;
    const NUMBER_FIVE = 5;
    const isValidEmail = email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
    if (isValidEmail && password.length >= NUMBER_FIVE) {
      this.setState({ disabledButton: false });
    } else if (!isValidEmail || password.length < NUMBER_FIVE) {
      this.setState({ disabledButton: true });
    }
  }

  handleSubmit() {
    const { dispatchSetValue } = this.props;
    dispatchSetValue(this.state);
  }

  render() {
    const { email, password, disabledButton } = this.state;
    return (
      <div>
        <h1>Login</h1>
        <form>
          <label htmlFor="email">
            Email:
            <input
              type="email"
              data-testid="email-input"
              name="email"
              id="email"
              onChange={ this.handleChange }
              value={ email }
            />
          </label>
          <label htmlFor="password">
            Senha:
            <input
              type="password"
              data-testid="password-input"
              name="password"
              id="password"
              onChange={ this.handleChange }
              value={ password }
            />
          </label>
          <Link to="/carteira">
            <button
              disabled={ disabledButton }
              type="button"
              onClick={ this.handleSubmit }
            >
              Entrar
            </button>
          </Link>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  dispatchSetValue: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  dispatchSetValue: (payload) => dispatch(setUser(payload)),
});

export default connect(null, mapDispatchToProps)(Login);
