import React from 'react';
import PropTypes from 'prop-types';
import { setPrefix, nextID } from 'react-id-generator';

class InputField extends React.Component {
  htmlID() {
    const { name } = this.props;
    setPrefix(name);
    const id = nextID();
    return id;
  }

  render() {
    const { name, testid, type, placeholder, onChange, value } = this.props;
    return (
      <label htmlFor={ this.htmlID }>
        { name }
        <input
          id={ this.htmlID }
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
