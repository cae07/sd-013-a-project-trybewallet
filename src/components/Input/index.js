import PropTypes from 'prop-types';
import React from 'react';
import { Label, Input } from './styles';

const InputComponent = ({
  id, testId, placeholder, type, onChange,
}) => (
  <Label htmlFor={ id }>
    {placeholder}
    <Input
      onChange={ onChange }
      placeholder={ placeholder }
      id={ id }
      type={ type }
      data-testid={ testId }
    />
  </Label>
);

InputComponent.defaultProps = {
  placeholder: '',
  type: 'text',
  testId: null,
  onChange: null,
};

InputComponent.propTypes = {
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  testId: PropTypes.string,
  type: PropTypes.string,
};

export default InputComponent;
