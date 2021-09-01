import React from 'react';
import PropTypes from 'prop-types';

function Input({ label, id }) {
  return (
    <label htmlFor={ id }>
      {`${label}`}
      <input type="text" name="valor" id={ id } />
    </label>

  );
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
export default Input;
