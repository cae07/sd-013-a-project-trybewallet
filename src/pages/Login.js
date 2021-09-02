import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import '../App.css';
import { saveEmail } from '../actions';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
  }

  onSubmitForm() {
    const { onSubmit, history } = this.props;
    const { email } = this.state;
    onSubmit(email);
    history.push('/carteira');
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { email, password } = this.state;
    const passwordMin = 6;
    const passwordAllow = password.length >= passwordMin;
    const emailValid = () => (/\S+@\S+\.\S+/).test(email);

    return (
      <div className="App-header">
        <fieldset>
          <h2>Gus Wallet</h2>
          <div className="img" />
          <label htmlFor="email-input">
            E-mail:
            <input
              data-testid="email-input"
              type="email"
              name="email"
              onChange={ this.handleChange }
              value={ email }
            />
          </label>
          <label htmlFor="password-input">
            PassWord:
            <input
              data-testid="password-input"
              type="password"
              name="password"
              onChange={ this.handleChange }
              value={ password }
            />
          </label>
          <button
            disabled={ !(emailValid() && passwordAllow) }
            className="button"
            type="submit"
            onClick={ () => this.onSubmitForm() }
          >
            Entrar
          </button>
        </fieldset>
      </div>
    );
  }
}

Login.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

const mapDispatchToProps = (dispatch) => (
  { onSubmit: (payload) => dispatch(saveEmail(payload)) }
);

export default connect(null, mapDispatchToProps)(Login);
