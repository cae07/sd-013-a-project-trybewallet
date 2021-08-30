import React from 'react';
import PropTypes from 'prop-types';

function Select({ label, id, value, onChange, options }) {
  return (
    <label htmlFor={ id } className={ id }>
      {label}
      &nbsp;
      <select
        name={ id }
        id={ id }
        data-testid={ id }
        value={ value }
        onChange={ onChange }
      >
        {options.map((m) => (<option key={ m } value={ m }>{ m }</option>))}
      </select>
    </label>
  );
}

Select.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Select;
