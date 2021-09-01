import React from 'react';
import PropTypes from 'prop-types';

function Select(props) {
  const { name, labelText, id, options } = props;

  return (
    <label htmlFor={ name }>
      { labelText }
      <select
        name={ name }
        id={ id }
      >
        {
          options.map((item, index) => (
            <option
              key={ index }
              value={ item }
            >
              { item }
            </option>
          ))
        }
      </select>
    </label>
  );
}

const { string } = PropTypes;

Select.propTypes = {
  name: string,
  labelText: string,
  id: string,
}.isRequired;

export default Select;
