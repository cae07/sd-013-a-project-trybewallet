import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const { name, type, placeholder, test, onChange, value, label } = this.props;
    return (
      <label htmlFor={ name }>
        {label}
        <input
          type={ type }
          name={ name }
          id={ name }
          placeholder={ placeholder }
          data-testid={ test }
          value={ value }
          onChange={ (event) => onChange(event) }
          required
        />
      </label>);
  }
}

Input.defaultProps = {
  label: '',
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  test: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string,
};

export default Input;
