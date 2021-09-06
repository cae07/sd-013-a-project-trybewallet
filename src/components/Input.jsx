import React from 'react';
import PropTypes from 'prop-types';

function Input(props) {
  const { type, name, labelText, placeholder, className, id, testID, onChange } = props;

  return (
    <div>
      <label htmlFor={ id }>
        { labelText }
        <input
          type={ type }
          name={ name }
          placeholder={ placeholder }
          className={ className }
          id={ id }
          data-testid={ testID }
          onChange={ onChange }
        />
      </label>
    </div>
  );
}

const { string, func } = PropTypes;

Input.propTypes = {
  type: string,
  name: string,
  labelText: string,
  placeholder: string,
  className: string,
  id: string,
  testID: string,
  onChange: func,
}.isRequired;

export default Input;
