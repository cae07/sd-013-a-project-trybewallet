import React, { Component } from 'react';

class LoginInput extends Component {
  constructor() {
    super();

  }

  render() {
    const {func, login} = this.props;

    return (
      <label htmlFor="login">
        Login
        <input
         type="text"
         id="login"
         name="email"
         value={ login }
         data-testid="email-input"
         onChange={func}
          />
      </label>
    )
  }
}


export default LoginInput;
