import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './Login.css';

import { getEmail } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      valid: false,
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.changePage = this.changePage.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value }, () => {
      const { email, password, valid } = this.state;
      const regex = /(.)(.*)@(.)(.*)\.(...)(.*)/;
      const passNum = 6;
      if (email.match(regex) && password.length >= passNum && valid === false) {
        this.setState({ valid: true });
      }
    });
  }

  changePage() {
    const { history, dispatchEmail } = this.props;
    const { email } = this.state;
    dispatchEmail(email);
    history.push('/carteira');
  }

  render() {
    const { valid } = this.state;
    return (
      <div className="login-panel">
        <label htmlFor="email">
          Email:
          <input
            name="email"
            type="email"
            data-testid="email-input"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="password">
          Password:
          <input
            name="password"
            type="text"
            data-testid="password-input"
            onChange={ this.handleChange }
          />
        </label>
        {valid ? <button type="button" onClick={ this.changePage }>Entrar</button> : <button type="button" disabled>Entrar</button>}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatchEmail: (payload) => dispatch(getEmail(payload)),
});

Login.propTypes = {
  history: PropTypes.object,
}.isRequired;

export default connect(null, mapDispatchToProps)(Login);
