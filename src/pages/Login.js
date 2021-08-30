import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { actionAdd } from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
    this.onSubmitForm = this.onSubmitForm.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
  }

  onSubmitForm(event) {
    event.preventDefault();

    const { handleSubmit, history } = this.props;
    const { email } = this.state;

    handleSubmit(email);
    history.push('/carteira');
  }

  changeHandler({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { email, password } = this.state;
    const seis = 6;
    const validateEmail = () => {
      const isValid = email.match(/^([\w.%+-]+)@([\w-]+.)+([\w]{2,})$/i);
      if (!isValid || email.lenght === 0) {
        return false;
      }
      return true;
    };

    const enable = validateEmail() && (password.length >= seis);

    return (
      <div>
        <form onSubmit={ this.onSubmitForm }>
          <label htmlFor="email">
            Email
            <input
              type="text"
              name="email"
              placeholder="Insira seu Email aqui!"
              id="email"
              value={ email }
              data-testid="email-input"
              onChange={ this.changeHandler }
            />
          </label>
          <label htmlFor="password">
            Senha
            <input
              type="text"
              name="password"
              placeholder="Insira sua senha aqui!"
              id="password"
              data-testid="password-input"
              value={ password }
              onChange={ this.changeHandler }
            />
          </label>
          <div>
            <input type="submit" disabled={ !enable } value="Entrar" />
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  handleSubmit: (email) => dispatch(actionAdd(email)),
});

Login.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
