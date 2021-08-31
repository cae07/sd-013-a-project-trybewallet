import React from 'react';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { saveEmailAction } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      redirect: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange({ target }) {
    this.setState((state) => ({
      ...state,
      [target.name]: target.value,
    }));
  }

  handleSubmit(e) {
    e.preventDefault();
    const { saveEmail } = this.props;
    const { email } = this.state;
    const { history } = this.props;
    saveEmail(email);
    history.push('/carteira');
  }

  render() {
    const { email, password, redirect } = this.state;
    const REG_EX_EMAIL = /^([\w\d._\-#])+@([\w\d._\-#]+[.][\w\d._\-#]+)+$/;
    const minPassLength = 6;
    if (redirect) { return <Redirect to="/carteira" />; }
    return (
      <div>
        <form onSubmit={ this.handleSubmit }>
          <input
            data-testid="email-input"
            type="email"
            name="email"
            value={ email }
            onChange={ this.handleChange }
          />
          <input
            data-testid="password-input"
            type="password"
            name="password"
            value={ password }
            onChange={ this.handleChange }
          />
          <button
            type="submit"
            disabled={ !REG_EX_EMAIL.test(email) || password.length < minPassLength }
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  saveEmail: (email) => dispatch(saveEmailAction(email)),
});

Login.propTypes = {
  saveEmail: PropTypes.func.isRequired,
  history: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
