import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';
import userAdd from '../actions/index';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      auth: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.submitUser = this.submitUser.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  }

  submitUser(event) {
    event.preventDefault();
    const { submit } = this.props;
    const { email } = this.state;
    submit(email);
    this.setState({ auth: true });
  }

  render() {
    const { password, email, auth } = this.state;
    const SIX = 6;

    const evaluatorEmail = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}/g
      .test(email);
    const enabled = evaluatorEmail && password.length >= SIX;

    if (auth) {
      return <Redirect to="/carteira" />;
    }
    return (
      <>
        <div>
          Login
        </div>
        <form>
          <input
            type="email"
            placeholder="email"
            name="email"
            value={ email }
            onChange={ this.handleChange }
            required
            data-testid="email-input"
          />
          <input
            type="password"
            minLength="6"
            required
            name="password"
            value={ password }
            onChange={ this.handleChange }
            data-testid="password-input"
          />
          <button
            type="submit"
            disabled={ !enabled }
            onClick={ this.submitUser }
          >
            Entrar
          </button>
        </form>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  submit: (payload) => dispatch(userAdd(payload)),
});

Login.propTypes = {
  submit: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
