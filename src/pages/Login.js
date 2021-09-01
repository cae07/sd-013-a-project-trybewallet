import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setLogin } from '../actions';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
    };
  }

  handleClick() {
    const { history, dispatchSetValue } = this.props;
    dispatchSetValue(this.state);
    history.push('/');
  }

  render() {
    return (
      <section>
        <form>
          <label htmlFor="email-input">
            <input type="text" data-testid="email-input" />
          </label>
          <label htmlFor="password-input">
            <input type="password" data-testid="password-input" />
          </label>
          <button type="submit" onClick={ this.handleClick }>Entrar</button>
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

const mapStateToProps = (state) => ({ inputLogin: state.user.inputLogin });
const mapDispatchToProps = (dispath) => ({
  dispathSetValue: (stateLogins) => dispath(setLogin(stateLogins)) });

export default connect(mapStateToProps, mapDispatchToProps)(Login);
