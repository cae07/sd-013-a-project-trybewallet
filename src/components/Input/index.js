import PropTypes from 'prop-types';
import React from 'react';
import style from './style.module.css';

const InputComponent = ({
  id, testId, placeholder, type, onChange,
}) => (
  <label className={ style.label } htmlFor={ id }>
    {placeholder}
    <input
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
};

InputComponent.propTypes = {
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  testId: PropTypes.string,
  type: PropTypes.string,
};

export default InputComponent;
