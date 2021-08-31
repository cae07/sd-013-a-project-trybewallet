import React from 'react';
import InputField from '../components/InputField';
import SubmitBtn from '../components/SubmitBtn';

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

  onChange({ target: { value, placeholder } }) {
    this.setState({ [placeholder]: value });
  }

  onClick(e) {
    const { isValid } = this.state;
    if (!isValid) {
      e.preventDefault();
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
      <form className="login">
        <InputField
          testid="email-input"
          type="text"
          placeholder="email"
          onChange={ this.onChange }
          value={ email }
        />
        <InputField
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

export default Login;
