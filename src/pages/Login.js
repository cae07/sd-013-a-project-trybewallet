import React from 'react';
import { connect } from 'react-redux';
import { saveEmail } from '../actions';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
    }

    this.handleChange = this.handleChange.bind(this);
    this.onSubmitLogin = this.onSubmitLogin.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  onSubmitLogin() {
    const { history, saveEmail } = this.props;
    const { email } = this.state;
    saveEmail(email);
    history.push('/carteira');
  }

  render() {
    const { email, password } = this.state;
    const passwordLength = 6;
    const passwordCorrect = password.length >= passwordLength;
    const verifiedEmail = () => {
        let result = /\S+@\S+\.\S+/;
        return result.test(email);
    }

    return (
      <fieldset>
        <input 
          type="text"
          name="email"
          data-testid="email-input"
          onChange={ this.handleChange }
        />
        <input 
          type="text"
          name="password"
          data-testid="password-input"
          onChange={ this.handleChange }
        />
        <button 
          type="submit" 
          disabled={ !(verifiedEmail() && passwordCorrect) }
          onClick={ this.onSubmitLogin }
          >Entrar
        </button>
      </fieldset>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
   saveEmail: (email) => dispatch(saveEmail(email))
})

export default connect(null, mapDispatchToProps)(Login);
