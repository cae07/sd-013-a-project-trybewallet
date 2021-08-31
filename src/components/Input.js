import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const { type, name, id, value, placeholder, dataTestId, onChange } = this.props;
    return (
      <label htmlFor={ name }>
        <input
          type={ type }
          name={ name }
          id={ id }
          value={ value }
          placeholder={ placeholder }
          data-testid={ dataTestId }
          onChange={ onChange }
        />
      </label>
    );
  }
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  dataTestId: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Input;
