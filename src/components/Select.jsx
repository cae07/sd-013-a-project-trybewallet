import React from 'react';
import PropTypes from 'prop-types';

function Select(props) {
  const { name, labelText, id, options, onChange } = props;
  // console.log(options);

  return (
    <label htmlFor={ id }>
      { labelText }
      <select
        name={ name }
        id={ id }
        onChange={ onChange }
      >
        {
          options ? options.map((item, index) => (
            <option
              key={ index }
              value={ item }
            >
              { item }
            </option>
          )) : null
        }
      </select>
    </label>
  );
}

const { string, func } = PropTypes;

Select.propTypes = {
  name: string,
  labelText: string,
  id: string,
  onChange: func,
}.isRequired;

export default Select;
