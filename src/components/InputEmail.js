import React from 'react';
import PropTypes from 'prop-types';

function InputEmail({ handleChange }) {
  return (
    <div className="pure-control-group">
      <label htmlFor="aligned-password">
        Senha
        <input
          id="aligned-password"
          onChange={ handleChange }
          data-testid="password-input"
          type="password"
          placeholder="Password"
        />
      </label>
    </div>
  );
}

InputEmail.propTypes = {
  handleChange: PropTypes.func.isRequired,
};
export default InputEmail;
