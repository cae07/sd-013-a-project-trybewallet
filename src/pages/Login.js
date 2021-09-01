import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { infoUsers } from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
  }

  handleClick() {
    const { history, dispathSetValue } = this.props;
    dispathSetValue(this.state);
    history.push('/');
  }

  render() {
    return (
      <section>
        <form>
          <label htmlFor="email-input">
            <input
              data-testid="email-input"
              type="email"
              placeholder="Email"
              required
              autoComplete="off"
            />
          </label>
          <label htmlFor="password-input">
            <input
              data-testid="password-input"
              type="password"
              placeholder="Password"
              required
              autoComplete="off"
            />
          </label>
          <button type="submit" onClick={ this.handleClick }>Entrar</button>
        </form>
      </section>
    );
  }
}

Login.propTypes = {
  dispathSetValue: PropTypes.func,
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
}.isRequired;

const mapStateToProps = (state) => ({
  login: state.user.login,
});

const mapDispatchToProps = (dispath) => ({
  dispathSetValue: (localLogin) => dispath(infoUsers(localLogin)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
