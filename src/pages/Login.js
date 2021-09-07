import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import InputField from '../components/InputField';
import SubmitBtn from '../components/SubmitBtn';
import { loginAction } from '../actions/index';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
    this.handleValidation = this.handleValidation.bind(this);
    this.state = {
      email: '',
      password: '',
      isValid: false,
    };
  }

  componentDidUpdate() {
    this.handleValidation();
  }

  onChange({ target: { value, name } }) {
    this.setState({ [name]: value });
  }

  onClick(e) {
    const { isValid, email } = this.state;
    if (!isValid) {
      e.preventDefault();
    } else {
      const { history, dispatchEmail } = this.props;
      dispatchEmail({ email });
      history.push('/carteira');
    }
  }

  handleValidation() {
    const MIN_LENGTH = 5;
    const { isValid, email, password } = this.state;
    const validEmail = (/^\w+@\w+([.])com$/).test(email);
    const validPass = password.length > MIN_LENGTH;

    if (isValid && (!validEmail || !validPass)) {
      this.setState((prevState) => (
        { ...prevState, isValid: !prevState.isValid }));
    }

    if (!isValid && validEmail && validPass) {
      this.setState((prevState) => (
        { ...prevState, isValid: !prevState.isValid }));
    }
  }

  render() {
    const { email, password, isValid } = this.state;
    return (
      <form className="login" onSubmit={ (e) => e.preventDefault() }>
        <InputField
          name="email"
          testid="email-input"
          type="text"
          placeholder="email@email.com"
          onChange={ this.onChange }
          value={ email }
        />
        <InputField
          name="password"
          testid="password-input"
          type="text"
          placeholder="password"
          onChange={ this.onChange }
          value={ password }
        />
        <SubmitBtn
          testid="submit-login-btn"
          onClick={ this.onClick }
          name="Entrar"
          isValid={ isValid }
        />
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatchEmail: (payload) => dispatch(loginAction(payload)),
});

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  dispatchEmail: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
