import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import { actionLogin } from '../actions/index';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      login: false,
      checkPassword: false,
      checkEmail: false,
      disable: true,
    };

    this.handleChange = this.handleChange.bind(this);
    this.validationPassoword = this.validationPassoword.bind(this);
    this.validationEmail = this.validationEmail.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  validationEmail() {
    const email = document.getElementById('email-id').value;
    const checkEmail = (/[\w.]+@\w+\.\w{2,4}/).test(email);
    if (checkEmail) {
      this.setState({ checkEmail: true }, this.buttonValidation);
    }
  }
  // expressão para validação de formulário tirada do Stack Overflow.
  // https://pt.stackoverflow.com/questions/1386/express%C3%A3o-regular-para-valida%C3%A7%C3%A3o-de-e-mail

  validationPassoword() {
    const password = document.getElementById('senha-id').value;
    const FIVE = 5;
    if (password.length > FIVE) {
      this.setState({ checkPassword: true },
        this.buttonValidation);
    } else {
      this.setState({ checkPassword: false }, this.buttonValidation);
    }
  }

  buttonValidation() {
    const { checkEmail, checkPassword } = this.state;
    if (checkEmail && checkPassword) {
      this.setState({ disable: false });
    } else {
      this.setState({ disable: true });
    }
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
    this.validationPassoword();
    this.validationEmail();
  }

  handleClick() {
    this.setState({ login: true });
  }

  render() {
    const { login, disable, email } = this.state;
    const { setLogin } = this.props;
    if (login) {
      setLogin(email);
      return <Redirect to="/carteira" />;
    }
    return (
      <div>

        <label htmlFor="email-id">
          <input
            type="email"
            name="email"
            placeholder="email"
            id="email-id"
            data-testid="email-input"
            onChange={ this.handleChange }
            required
          />
        </label>
        <label htmlFor="senha-id">
          <input
            type="password"
            name="password"
            placeholder="password"
            id="senha-id"
            data-testid="password-input"
            onChange={ this.handleChange }

          />
        </label>
        <button
          type="button"
          onClick={ this.handleClick }
          disabled={ disable }
        >
          Entrar

        </button>

      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setLogin: (email) => dispatch(actionLogin(email)) };
}

Login.propTypes = {
  setLogin: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);

// Questões feitas com ajuda de colegas da turma em call.
