import React, { Component } from 'react';
import Proptypes from 'prop-types';

class Button extends Component {
  render() {
    const { buttonText, onClick } = this.props;
    return (
      <button type="submit" onClick={ onClick }>
        { buttonText }
      </button>
    );
  }
}

Button.propTypes = {
  buttonText: Proptypes.string,
  onClick: Proptypes.func,
}.isRequired;

export default Button;
