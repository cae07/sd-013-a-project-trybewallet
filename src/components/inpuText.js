import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputText extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    const {
      idName,
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
          name={ idName }
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
  type: PropTypes.string,
  value: PropTypes.string,
  idName: PropTypes.string,
  testid: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
}.isRequired;

export default InputText;
