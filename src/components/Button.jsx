import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    const { value, onClick, disabled } = this.props;
    return (
      <button
        type="button"
        onClick={ onClick }
        disabled={ disabled }
      >
        { value }
      </button>
    );
  }
}

Button.propTypes = {
  value: PropTypes.string,
  onClick: PropTypes.func,
}.isRequired;

export default Button;
