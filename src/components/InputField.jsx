import React from 'react';
import PropTypes from 'prop-types';

class InputField extends React.Component {
  constructor(props) {
    super(props);
    this.htmlID = this.htmlID.bind(this);
  }

  htmlID() {
    const { name } = this.props;
    const hexIdChars = '0123456789ABCDEF';
    const KEY_LENGTH = 40;
    let id = name;
    for (let i = 0; i < KEY_LENGTH; i += 1) {
      id += hexIdChars[Math.floor(Math.random() * 16)];
    }
    return id;
  }

  render() {
    const { name, testid, type, placeholder, onChange, value } = this.props;
    const id = this.htmlID();
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
