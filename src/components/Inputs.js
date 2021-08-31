import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Inputs extends Component {
  render() {
    const { name, label, page, type, onHandleChange } = this.props;
    return (
      <label htmlFor={ `${name}-${page}` }>
        {label}
        <input
          name={ name }
          id={ `${name}-${page}` }
          type={ type }
          data-testid={ `${name}-input` }
          onChange={ onHandleChange }
        />
      </label>
    );
  }
}

Inputs.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  page: PropTypes.string,
  type: PropTypes.string,
  onHandleChange: PropTypes.func.isRequired,
};

Inputs.defaultProps = {
  page: 'general',
  type: 'text',
};

export default Inputs;
