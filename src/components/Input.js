import React from 'react';
import PropTypes from 'prop-types';

function Input({ label }) {
  return (
    <label htmlFor="teste">
      {`${label}`}
      <input type="text" name="valor" id="teste" />
    </label>

  );
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
};
export default Input;
