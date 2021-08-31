import React from 'react';
import PropTypes from 'prop-types';

class InputUser extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  }

  submitForm() {
  }

  render() {
    const { email, password } = this.state;
    const passwordMin = 6;
    const passwordValid = password.length >= passwordMin;
    const emailValidation = () => {
      const valid = /\S+@\S+\.\S+/;
      return valid.test(email);
    };

    return (
      <fieldset>
        <label htmlFor="email">
          Email:
          <input
            type="email"
            name="email"
            onChange={ this.handleChange }
            placeholder="Digite seu email"
            data-testid="email-input"
          />
        </label>

        <label htmlFor="password">
          Senha:
          <input
            name="password"
            type="password"
            onChange={ this.handleChange }
            placeholder="Digite sua senha"
            data-testid="password-input"
          />
        </label>

        <button
          type="submit"
          disabled={ !(emailValidation() && passwordValid) }
          onClick={ this.submitForm }
        >
          Entrar
        </button>
      </fieldset>
    );
  }
}

InputUser.propTypes = {
  label: PropTypes.string.isRequired,
}

export default InputUser;
