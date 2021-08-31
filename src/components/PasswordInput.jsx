import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PasswordInput extends Component {
  render() {
    const { func, pass } = this.props;

    return (
      <label htmlFor="password">
        Password
        <input
          type="password"
          id="password"
          name="password"
          value={ pass }
          data-testid="password-input"
          onChange={ func }
        />
      </label>
    );
  }
}

PasswordInput.propTypes = {
  func: PropTypes.func,
  pass: PropTypes.string,
}.isRequired;

export default PasswordInput;
