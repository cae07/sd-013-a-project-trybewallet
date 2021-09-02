import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PasswordInput extends Component {
  render() {
    const { func, pass } = this.props;

    return (
      <div className="password-input">
        <label htmlFor="password">
          <p className="password-label">Password</p>
          <input
            type="password"
            id="password"
            className="pass-inp"
            name="password"
            value={ pass }
            data-testid="password-input"
            onChange={ func }
          />
        </label>
      </div>
    );
  }
}

PasswordInput.propTypes = {
  func: PropTypes.func,
  pass: PropTypes.string,
}.isRequired;

export default PasswordInput;
