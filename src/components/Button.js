import React from 'react';
import Proptypes from 'prop-types';

class Button extends React.Component {
  render() {
    const { onClick, disabled } = this.props;
    return (
      <button
        type="button"
        onClick={ onClick }
        disabled={ disabled }
      >
        Entrar
      </button>
    );
  }
}

Button.propTypes = {
  onClick: Proptypes.func,
  disabled: Proptypes.func,
}.isRequired;

export default Button;