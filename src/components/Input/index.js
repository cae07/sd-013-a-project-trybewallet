import PropTypes from 'prop-types';
import React from 'react';
import style from './style.module.css';

const InputComponent = ({
  id, testId, placeholder, type, onChange, name,
}) => (
  <label className={ style.label } htmlFor={ id }>
    {placeholder}
    <input
      name={ name }
      className={ style.input }
      onChange={ onChange }
      placeholder={ placeholder }
      id={ id }
      type={ type }
      data-testid={ testId }
    />
  </label>
);

InputComponent.defaultProps = {
  placeholder: '',
  type: 'text',
  testId: null,
  onChange: null,
  name: '',
};

InputComponent.propTypes = {
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  testId: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
};

export default InputComponent;
