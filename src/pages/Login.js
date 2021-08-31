import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Input from '../components/Input';
import Button from '../components/Button';
import { userLogin } from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      disabled: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.loginCheck = this.loginCheck.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
    this.loginCheck();
  }

  loginCheck() {
    const { email, password } = this.state;
    const mailFormat = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const minLength = 5;
    if (mailFormat.test(email) && password.length >= minLength) {
      this.setState({
        disabled: false,
      });
    } else {
      this.setState({
        disabled: true,
      });
    }
  }

  render() {
    const { email, password, disabled } = this.state;
    const { dispatchEmail } = this.props;
    return (
      <form>
        <Input
          type="email"
          name="email"
          value={ email }
          placeholder="Email"
          datatestid="email-input"
          onChange={ this.handleChange }
        />
        <Input
          type="password"
          name="password"
          value={ password }
          placeholder="Senha"
          datatestid="password-input"
          onChange={ this.handleChange }
        />
        <Button
          onClick={ () => dispatchEmail(email) }
          disabled={ disabled }
        />
      </form>
    );
  }
}

Login.propTypes = {
  dispatchEmail: PropTypes.func,
}.isRequired;

const mapDispatchToProps = (dispatch) => ({
  dispatchEmail: (payload) => dispatch(userLogin(payload)),
});
export default connect(null, mapDispatchToProps)(Login);
