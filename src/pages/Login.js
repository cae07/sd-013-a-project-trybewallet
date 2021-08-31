import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { userLogin } from '../actions/index';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  handleSubmit() {
    const { setLogin } = this.props;
    const { email } = this.state;
    setLogin(email);
  }

  render() {
    const emailRegex = /\S+@\S+\.\S+/;
    const validationPass = 6;

    const { email, password } = this.state;
    const dsb = !(emailRegex.test(email) && password.length >= validationPass);

    const { loginStatus } = this.props;
    if (loginStatus) return <Redirect to="/carteira" />;

    return (
      <div>
        <form action="#">
          <h3>Login</h3>
          <input
            data-testid="email-input"
            placeholder="email"
            type="text"
            name="email"
            value={ email }
            onChange={ this.handleChange }
          />
          <input
            data-testid="password-input"
            type="password"
            placeholder="password"
            name="password"
            value={ password }
            onChange={ this.handleChange }
          />
          <button
            type="button"
            disabled={ dsb }
            onClick={ this.handleSubmit }
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  setLogin: PropTypes.func,
}.isRequired;

const mapStateToProps = (state) => ({ loginStatus: state.user.email });

const mapDispatchToProps = (dispatch) => ({
  setLogin: (payload) => dispatch(userLogin(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
