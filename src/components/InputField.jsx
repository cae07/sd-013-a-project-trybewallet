import React from 'react';
import PropTypes from 'prop-types';

class InputField extends React.Component {
  render() {
    const { testeid, type, placeholder, onChange } = this.props;
    return (
      <input
        data-testeid={ testeid }
        type={ type }
        placeholder={ placeholder }
        onChange={ onChange }
      />
    );
  }
}

InputField.propTypes = {
  testeid: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputField;
