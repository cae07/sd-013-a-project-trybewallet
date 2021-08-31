import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import actionGetEmail from '../actions/index';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.enableButton = this.enableButton.bind(this);

    this.state = {
      email: '',
      password: '',
    };
  }

  enableButton() {
    const { email, password } = this.state;
    const validPassword = 6;
    if (password.length >= validPassword) {
      const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
      if (regex.test(email)) return true;
    }
    return false;
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { email, password } = this.state;
    const { getEmailDispatch } = this.props;

    return (
      <div className="container">
        <input
          className="login-input"
          data-testid="email-input"
          type="email"
          name="email"
          placeholder="email"
          value={ email }
          onChange={ this.handleChange }
        />
        <input
          className="login-input"
          data-testid="password-input"
          type="password"
          name="password"
          placeholder="password"
          value={ password }
          onChange={ this.handleChange }
        />
        <Link to="/carteira">
          <button
            className="login-btn"
            type="button"
            disabled={ !this.enableButton() }
            onClick={ () => getEmailDispatch(this.state) }
          >
            Entrar
          </button>
        </Link>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getEmailDispatch: (state) => dispatch(actionGetEmail(state)),
});

Login.propTypes = {
  getEmailDispatch: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
