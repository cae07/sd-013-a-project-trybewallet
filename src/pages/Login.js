import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import setLogin from '../actions';

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
    const { email, password } = this.state;
    const { history, submitLogin } = this.props;
    submitLogin(email, password);
    history.push('/carteira');
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    const MAX = 6;
    const { email, password } = this.state;
    const validate = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email);
    return (
      <main>
        <form>
          <div className="email">
            <label htmlFor="email">
              Email
              <input
                data-testid="email-input"
                type="text"
                id="email"
                value={ email }
                onChange={ (e) => this.handleChange(e) }
                name="email"
              />
            </label>
          </div>
          <div
            className="password"
          >
            <label htmlFor="password">
              Password
              <input
                data-testid="password-input"
                type="password"
                id="password"
                value={ password }
                onChange={ (e) => this.handleChange(e) }
                name="password"
              />
            </label>
          </div>
          <div className="button">
            <button
              disabled={ !validate || password.length < MAX }
              type="button"
              onClick={ this.onSubmitForm }
            >
              Entrar
            </button>
          </div>
        </form>
      </main>
    );
  }
}

Login.propTypes = {
  submitLogin: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  submitLogin: (...payload) => dispatch(setLogin(...payload)),
});

export default connect(null, mapDispatchToProps)(Login);
