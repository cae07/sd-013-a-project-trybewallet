import React, { Component } from 'react';
// import { connect } from 'react-redux';
import Proptypes from 'prop-types';
import Input from '../components/Input';
import Button from '../components/Button';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
    };
    this.handleChange = this.handleChange.bind(this);
    // this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  // handleClick() {
  //   const { changeInputValue, history } = this.props;
  //   changeInputValue(this.state);
  //   history.push('./');
  // }

  render() {
    const { handleChange, handleClick } = this;
    return (
      <div>
        Login
        <fieldset>
          <Input
            dataTestid="email-input"
            name="email"
            onChange={ handleChange }
            placeholder="Email"
            type="text"
          />

          <Input
            dataTestid="password-input"
            name="password"
            onChange={ handleChange }
            placeholder="Senha"
            type="password"
          />

          <Button buttonText="Entrar" onClick={ handleClick } />
        </fieldset>

      </div>
    );
  }
}

// const mapDispatchToProps = (dispatch) => ({
//   changeInputValue: (state) => dispatch(login(state)),
// });

Login.propTypes = {
  changeInputValue: Proptypes.func,
  history: Proptypes.shape(),
}.isRequired;

// export default connect(null, mapDispatchToProps)(Login);

export default Login;
