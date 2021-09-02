import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  renderInput() {
    const { name, type, onChange, id } = this.props;

    const AddInput = (
      <label htmlFor={ name }>
        {name}
        <input
          type={ type }
          name={ id }
          id={ name }
          onChange={ onChange }
        />
      </label>
    );

    return AddInput;
  }

  render() {
    return this.renderInput();
  }
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Input;
