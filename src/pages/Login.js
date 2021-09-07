import React from 'react';
import { connect } from 'react-redux';
import Proptypes from 'prop-types';
import { inputEmail } from '../actions';
import Input from '../components/Input';
import Button from '../components/Button';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleClick() {
    const { email } = this.state;
    const { changeInputValue, history } = this.props;
    changeInputValue(email);
    history.push('./carteira');
  }

  render() {
    const { handleChange, handleClick } = this;
    const { email, password } = this.state;
    const minCharactersPassword = 6;
    const validPassword = password.length >= minCharactersPassword;
    // https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
    // Nesse link acima o regex significa anystring@anystring.anystring código do stackoverflow
    // Ajuda de Aline Hoshino
    const validEmail = () => {
      const regex = /\S+@\S+\.\S+/;
      return regex.test(email);
    };
    return (
      <div>
        <form>
          <Input
            label="Email:"
            name="email"
            data-testid="email-input"
            value={ email }
            handleChange={ handleChange }
          />
          <Input
            label="Senha:"
            name="password"
            data-testid="password-input"
            handleChange={ handleChange }
            value={ password }
          />
          <Button
            handleClick={ handleClick }
            disabled={ !(validEmail() && validPassword) }
          />
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  changeInputValue: (state) => dispatch(inputEmail(state)) });

Login.propTypes = {
  changeInputValue: Proptypes.func.isRequired,
  history: Proptypes.shape().isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
