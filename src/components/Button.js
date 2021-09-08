import React from 'react';
import Proptypes from 'prop-types';

class Button extends React.Component {
  render() {
    const { handleClick, disabled } = this.props;
    return (
      <button
        type="button"
        onClick={ handleClick }
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
