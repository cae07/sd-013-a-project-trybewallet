import React from 'react';
import PropTypes from 'prop-types';
import htmlID from './util/util';

class InputField extends React.Component {
  render() {
    const { name, testid, type, placeholder, onChange, value } = this.props;
    const id = htmlID(this.props);
    return (
      <label htmlFor={ id }>
        { name }
        <input
          id={ id }
          name={ name }
          data-testid={ testid }
          type={ type }
          placeholder={ placeholder }
          onChange={ onChange }
          value={ value }
        />
      </label>
    );
  }
}

InputField.propTypes = {
  name: PropTypes.string.isRequired,
  testid: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default InputField;
