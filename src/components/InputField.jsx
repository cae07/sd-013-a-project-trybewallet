import React from 'react';
import PropTypes from 'prop-types';
import nextId, { setPrefix } from 'react-id-generator';

class InputField extends React.Component {
  constructor(props) {
    super(props);
    this.htmlID = this.htmlID.bind(this);
  }

  htmlID() {
    const { name } = this.props;
    setPrefix(name);
    const id = nextId();
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
