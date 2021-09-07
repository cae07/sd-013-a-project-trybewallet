import React from 'react';
import PropTypes from 'prop-types';

const FormInput = ({
  name,
  type,
  onChange,
  className,
  value,
  label,
  children,
  ...props
}) => (
  <div className="form-group">
    <label htmlFor={ name }>
      {label}
      <input
        type={ type }
        name={ name }
        id={ name }
        className={ className }
        placeholder=""
        onChange={ onChange }
        value={ value }
        { ...props }
      />
      {children}
    </label>
  </div>
);

FormInput.defaultProps = {
  type: 'text',
  className: '',
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  label: '',
  children: null,
};

FormInput.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
  type: PropTypes.oneOf(['text', 'number']),
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  label: PropTypes.string,
  children: PropTypes.node,
};

export default FormInput;
