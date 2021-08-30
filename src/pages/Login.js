import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { saveUserInfo } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      isBtnDisabled: true,
      btnIsClicked: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.verifyInputs = this.verifyInputs.bind(this);
  }

  handleClick() {
    const { email } = this.state;
    const { saveEmail } = this.props;

    saveEmail(email);

    this.setState({
      btnIsClicked: true,
    });
  }

  handleChange({ target }) {
    const { name, value } = target;

    this.setState({
      [name]: value,
    }, () => this.verifyInputs());
  }

  verifyInputs() {
    const { email, password } = this.state;
    const PASS_CHARACTER_LIMIT = 6;

    const emailVerification = /\S+@\S+\.\S+/;
    const isValidEmail = emailVerification.test(email);
    const isValidPassword = (password.length >= PASS_CHARACTER_LIMIT);

    if (isValidEmail && isValidPassword) {
      this.setState({
        isBtnDisabled: false,
      });
    } else {
      this.setState({
        isBtnDisabled: true,
      });
    }
  }

  render() {
    const { isBtnDisabled, btnIsClicked } = this.state;

    return (
      <div>
        <form action="">
          <label htmlFor="email">
            <input
              type="text"
              name="email"
              id="email"
              placeholder="E-mail"
              data-testid="email-input"
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="password">
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Senha"
              data-testid="password-input"
              onChange={ this.handleChange }
            />
          </label>
          <button
            type="button"
            disabled={ isBtnDisabled }
            onClick={ this.handleClick }
          >
            Entrar
          </button>
          { btnIsClicked && <Redirect to="/carteira" /> }
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  saveEmail: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  saveEmail: (payload) => dispatch(saveUserInfo(payload)),
});

export default connect(null, mapDispatchToProps)(Login);
