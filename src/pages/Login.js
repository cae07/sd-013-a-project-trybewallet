import React from 'react';
import { connect } from 'react-redux';
import Proptypes from 'prop-types';
import { emailLogin } from '../actions';
import Input from '../components/Input';
import InputPassword from '../components/InputPassword';
import Button from '../components/Button';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleNextPage = this.handleNextPage.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleNextPage() {
    const { email } = this.state;
    const { changeValue, history } = this.props;
    changeValue(email);
    history.push('./carteira');
  }

  render() {
    const { email, password } = this.state;
    const { handleChange, handleNextPage } = this;
    const passwordLength = 6;
    const passwordCorrect = password.length >= passwordLength;
    const validateEmail = () => {
      const emailCorrect = /\S+@\S+\.\S+/;
      return emailCorrect.test(email);
    };
    return (
      <div>
        <Input
          label="Email:"
          name="email"
          datatestid="email-input"
          onChange={ handleChange }
        />
        <InputPassword
          label="Senha:"
          name="password"
          datatestid="password-input"
          onChange={ handleChange }
        />
        <Button
          onClick={ handleNextPage }
          disabled={ !(validateEmail() && passwordCorrect) }
          name="Entrar"
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  changeValue: (state) => dispatch(emailLogin(state)) });

Login.propTypes = {
  changeValue: Proptypes.func.isRequired,
  history: Proptypes.shape().isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
