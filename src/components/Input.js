import React from 'react';
import PropTypes from 'prop-types';

function Input({ label }) {
  return (
    <labe htmlFor="valor">
      {`${label}`}
      <input type="text" name="valor" />
    </labe>

  );
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
};
export default Input;
