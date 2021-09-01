import PropTypes from 'prop-types';
import React from 'react';
import style from './style.module.css';

const SelectComponent = ({
  id, testId, placeholder, type, onChange, options,
}) => (
  <label className={ style.label } htmlFor={ id }>
    {placeholder}
    <select
      className={ style.select }
      onChange={ onChange }
      placeholder={ placeholder }
      id={ id }
      type={ type }
      data-testid={ testId }
    >
      {options.map((option) => (
        <option key={ option.value }>{option.label}</option>
      ))}
    </select>
  </label>
);

SelectComponent.defaultProps = {
  placeholder: '',
  type: 'text',
  testId: null,
  onChange: null,
};

const { string, func, arrayOf } = PropTypes;

SelectComponent.propTypes = {
  id: string.isRequired,
  onChange: func,
  placeholder: string,
  testId: string,
  type: string,
  options: arrayOf(Object).isRequired,
};

export default SelectComponent;
