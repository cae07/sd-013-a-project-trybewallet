import React from 'react';
import { connect } from 'react-redux';
import userAdd from '../actions/index';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
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
    const { history, submit } = this.props;
    const { email } = this.state;

    submit(email);
    history.push('/carteira');
  }

  render() {
    const { password, email } = this.state;
    const SIX = 6;

    const evaluatorEmail = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}/g
      .test(email);
    const enabled = evaluatorEmail && password.length >= SIX;

    /* if (enabled) {
      return this.setState({ autentic: true });
    } */

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
  submit: (email) => dispatch(userAdd(email)),
});

export default connect(null, mapDispatchToProps)(Login);
