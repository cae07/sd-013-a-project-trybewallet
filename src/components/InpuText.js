import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputText extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    const {
      id,
      name,
      type,
      placeholder,
      value,
      testid,
      onChange,
    } = this.props;

    return (
      <label htmlFor={ id }>
        <input
          id={ id }
          name={ name }
          type={ type }
          value={ value }
          data-testid={ testid }
          onChange={ onChange }
          placeholder={ placeholder }
        />
      </label>
    );
  }
}

InputText.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  id: PropTypes.string,
  testid: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
}.isRequired;

export default InputText;
