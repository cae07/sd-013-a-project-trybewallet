import PropTypes from 'prop-types';
import React from 'react';
import { Label, Input } from './styles';

const ButtonComponent = ({
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

ButtonComponent.defaultProps = {
  placeholder: '',
  type: 'text',
};

ButtonComponent.propTypes = {
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  testId: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default InputComponent;
