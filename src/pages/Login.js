import React from 'react';
import InputText from '../components/inpuText';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };

    this.onChange = this.onChange.bind(this);

  }

  onChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { email, password } = this.state;

    return (
      <div className="loginForm">
        <form>
          <InputText
            data-testid="email-input"
            idName="email"
            type="email"
            pathName="E-mail"
            value={ email }
            onChange={ this.onChange }
          />
        </form>
      </div>
    );
  }
}

export default Login;
