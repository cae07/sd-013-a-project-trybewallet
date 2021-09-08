import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const { value, id, text } = this.props;
    return (
      <label htmlFor={ id }>
        {text}
        <input
          type="text"
          value={ value }
          id={ id }
          name={ value }
          /* onChange={ handleChange() } */
        />
      </label>

    );
  }
}

Input.propTypes = {
  value: PropTypes.string,
  id: PropTypes.string,
  text: PropTypes.string,
}.isRequired;

export default Input;
