import React from 'react';
import PropTypes from 'prop-types';

class TextInput extends React.Component {
  render() {
    const { handleChange, name, value = '' } = this.props;
    return (
      <label htmlFor="description">
        Descrição
        <input
          type="text"
          name={ name }
          id={ name }
          value={ value }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

TextInput.propTypes = {
  handleChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default TextInput;
