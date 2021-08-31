import React from 'react';
import PropTypes from 'prop-types';

function Input({ label }) {
  return (
    <label>
      {`${label}`}
      <input type="text" name="valor" />
    </label>

  );
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
};
export default Input;
