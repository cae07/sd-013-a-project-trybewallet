import React from 'react';
import PropTypes from 'prop-types';

function Input({ label, id, type, value, onChange }) {
  return (
    <label htmlFor={ id } className={ id }>
      {label}
      &nbsp;
      <input
        type={ type }
        id={ id }
        data-testid={ id }
        min="0"
        maxLength="25"
        value={ value }
        onChange={ onChange }
      />
    </label>
  );
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Input;
