import PropTypes from 'prop-types';
import React from 'react';
import { Label, Select } from './styles';

const SelectComponent = ({
  id, testId, placeholder, type, onChange, options,
}) => (
  <Label htmlFor={ id }>
    {placeholder}
    <Select
      onChange={ onChange }
      placeholder={ placeholder }
      id={ id }
      type={ type }
      data-testid={ testId }
    >
      {options.map((option) => (
        <option key={ option.value }>{option.label}</option>
      ))}
    </Select>
  </Label>
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
