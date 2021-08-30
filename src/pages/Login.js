import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { saveUserEmail } from '../actions';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      disabled: true,
    };

    this.handleChange = this.handleChange.bind(this);
    this.checkData = this.checkData.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
    this.checkData();
  }

  // Para fazer o teste do email, usei o regex do Gabriel Gaspar como base, assim como o seu if.

  checkData() {
    const { email, password } = this.state;
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    const passwordMinLength = 5;
    if (emailRegex.test(email) && password.length > passwordMinLength) {
      this.setState({
        disabled: false,
      });
    } else {
      this.setState({
        disabled: true,
      });
    }
  }

  render() {
    const { email, password, disabled } = this.state;
    const { saveEmail } = this.props;
    return (
      <fieldset>
        <label htmlFor="email">
          Email:
          <input
            type="text"
            name="email"
            value={ email }
            data-testid="email-input"
            onChange={ this.handleChange }
          />
        </label>
        <br />
        <label htmlFor="password">
          Senha:
          <input
            name="password"
            type="text"
            value={ password }
            data-testid="password-input"
            onChange={ this.handleChange }
          />
        </label>
        <br />
        <Link to="/carteira">
          <button
            type="button"
            disabled={ disabled }
            onClick={ () => saveEmail(email) }
          >
            Entrar
          </button>
        </Link>
      </fieldset>
    );
  }
}

Login.propTypes = {
  saveEmail: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  saveEmail: (payload) => dispatch(saveUserEmail(payload)),
});

export default connect(null, mapDispatchToProps)(Login);
