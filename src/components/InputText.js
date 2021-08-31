import React from 'react';
import PropTypes from 'prop-types';

class InputText extends React.Component {
  render() {
    const { name, changeEvent, labelValue, value } = this.props;

    return (
      <label htmlFor={ name }>
        { labelValue }
        <input
          type="text"
          name={ name }
          value={ value }
          id={ name }
          onChange={ changeEvent }
        />
      </label>
    );
  }
}

InputText.propTypes = {
  name: PropTypes.string.isRequired,
  changeEvent: PropTypes.func.isRequired,
  labelValue: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default InputText;
