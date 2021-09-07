import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      senha: '',
      validation: true,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onValidation = this.onValidation.bind(this);
  }

  onValidation() {
    const min = 6;
    const { email, senha } = this.state;
    const validation = !(/\w+@\w+.com/.test(email)
    && senha.length >= min
    && (/[A-z\s]+/).test(senha));
    this.setState({ validation });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value }, () => {
      this.onValidation();
    });
  }

  handleClick() {
    const { history } = this.props;
    history.push('/carteira');
  }

  render() {
    const { email, senha, validation } = this.state;
    return (
      <form onSubmit={ this.handleSubmit }>
        <label htmlFor="email">
          Email:
          <input
            data-testid="email-input"
            type="text"
            name="email"
            value={ email }
            onChange={ this.handleChange }
          />
        </label>

        <label htmlFor="senha">
          Senha:
          <input
            data-testid="password-input"
            type="text"
            name="senha"
            value={ senha }
            onChange={ this.handleChange }
          />
        </label>

        <input
          type="submit"
          value="Entrar"
          disabled={ validation }
          onClick={ this.handleClick }
        />
      </form>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default connect()(Login);
