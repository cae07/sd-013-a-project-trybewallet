import React from 'react';
import { Link } from 'react-router-dom';
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
    const { onSubmit } = this.props;
    // const { email } = this.state;
    onSubmit(this.state);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { email, password } = this.state;

    return (
      <div className="App-header">
        <fieldset>

          <h2 className="App">Trybe Wallet</h2>
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

          <Link
            to="/carteira"
            className="button"
            onClick={ () => this.onSubmitForm() }
          >
            Entrar
          </Link>

        </fieldset>
      </div>
    );
  }
}

Login.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => (
  { onSubmit: (payload) => dispatch(saveEmail(payload)) }
);

export default connect(null, mapDispatchToProps)(Login);
