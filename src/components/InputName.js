import React from 'react';
import PropTypes from 'prop-types';

function InputName({ handleChange }) {
  return (
    <div className="pure-control-group">
      <label htmlFor="aligned-name">
        Email
        <input
          onChange={ handleChange }
          data-testid="email-input"
          type="text"
          id="aligned-name"
          placeholder="Username"
        />
      </label>
    </div>);
}

InputName.propTypes = {
  handleChange: PropTypes.func.isRequired,
};
export default InputName;
