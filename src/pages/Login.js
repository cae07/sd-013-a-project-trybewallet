import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setLogin } from '../actions';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange() {
    const regexEmail = /^\w+(\[\+\.-\]?\w)*@\w+(\[\.-\]?\w+)*\.[a-z]+$/i;
    const regexPassword = /^[0-9]{5,}$/i;
    const clickButton = document.querySelector('.btn');
    const { email, password } = this.state;
    if ((regexEmail.test(email)) && (regexPassword.test(password))) {
      clickButton.removeAttribute('disabled');
    } else {
      clickButton.setAttribute('disabled', '');
    }
  }

  handleClick() {
    const { email } = this.state;
    const { dispatchSetValue } = this.props;
    dispatchSetValue(email);
  }

  render() {
    return (
      <section>
        <form onChange={ this.handleChange }>
          <label htmlFor="email-input">
            <input
              type="text"
              required
              placeholder="Email"
              onChange={ ({ target }) => this.setState({ email: target.value }) }
              data-testid="email-input"
            />
          </label>
          <label htmlFor="password-input">
            <input
              type="password"
              data-testid="password-input"
              placeholder="Enter your password"
              required
              onChange={ ({ target }) => this.setState({ password: target.value }) }
            />
          </label>
          <Link to="/carteira" onClick={ this.handleClick }>
            <button
              className="btn"
              type="submit"
              disabled
            >
              Entrar
            </button>
          </Link>
        </form>
      </section>
    );
  }
}

Login.propTypes = {
  dispatchSetValue: PropTypes.func,
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
}.isRequired;

const mapStateToProps = (state) => ({ email: state.user.email });
const mapDispatchToProps = (dispath) => ({
  dispatchSetValue: (stateLogins) => dispath(setLogin(stateLogins)) });

export default connect(mapStateToProps, mapDispatchToProps)(Login);
