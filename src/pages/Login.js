import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { saveEmail } from '../actions/index';

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
    && senha.length >= min);
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
    const { history, validEmail } = this.props;
    const { email } = this.state;

    history.push('/carteira');
    validEmail(email);
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
            type="password"
            name="senha"
            value={ senha }
            onChange={ this.handleChange }
          />
        </label>

        <button
          type="button"
          disabled={ validation }
          onClick={ this.handleClick }
        >
          Entrar
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  validEmail: (email) => dispatch(saveEmail(email)),
});

Login.propTypes = {
  validEmail: PropTypes.func,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
}.isRequired;

export default connect(null, mapDispatchToProps)(Login);
