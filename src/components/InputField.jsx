import React from 'react';
import PropTypes from 'prop-types';

class InputField extends React.Component {
  render() {
    const { testid, type, placeholder, onChange, value } = this.props;
    return (
      <input
        data-testid={ testid }
        type={ type }
        placeholder={ placeholder }
        onChange={ onChange }
        value={ value }
      />
    );
  }
}

InputField.propTypes = {
  testid: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default InputField;
