import React, { Component } from 'react';

class PasswordInput extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    const {func, pass} = this.props;

    return (
      <label htmlFor="password">
        Password
        <input
        type="password"
        id="password"
        name="password"
        value={pass}
        data-testid="password-input"
        onChange={func}
        />
      </label>
    )
  }
}

export default PasswordInput;