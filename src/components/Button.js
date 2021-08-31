import React, { Component } from 'react';
import Proptypes from 'prop-types';

class Button extends Component {
  render() {
    const { buttonText, disabled, onClick } = this.props;
    return (
      <button
        disabled={ disabled }
        type="submit"
        onClick={ onClick }
      >
        { buttonText }
      </button>
    );
  }
}

Button.propTypes = {
  buttonText: Proptypes.string,
  disabled: Proptypes.bool,
  onClick: Proptypes.func,
}.isRequired;

export default Button;
