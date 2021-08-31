import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import './login.css';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
  }

  onSubmitForm() {
    const { history, dispatchSetValue } = this.props;
    dispatchSetValue(this.state);
    history.push('/');
  }

  render() {
    return (
      <section className="login-section">
        <form>
          <label htmlFor="email-input">
            <input type="text" data-testid="email-input" placeholder="Email" />
          </label>
          <label htmlFor="password-input">
            <input type="password" data-testid="password-input" placeholder="Senha" />
          </label>
          <button type="submit" onClick={ this.onSubmitForm }>Entrar</button>
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

const mapDispatchToProps = (dispath) => ({
  dispathSetValue: (localStateLogin) => dispath(setLogin(localStateLogin)),
});

const mapStateToProps = (state) => ({ newInputs: state.user.newInputs });

export default connect(mapStateToProps, mapDispatchToProps)(Login);
