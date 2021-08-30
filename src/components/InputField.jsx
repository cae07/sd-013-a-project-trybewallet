import React from 'react';
import PropTypes from 'prop-types';

class InputField extends React.Component {
  render() {
    const { testid, type, placeholder, onChange } = this.props;
    return (
      <input
        data-testid={ testid }
        type={ type }
        placeholder={ placeholder }
        onChange={ onChange }
      />
    );
  }
}

InputField.propTypes = {
  testid: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputField;
