import React from 'react';
import Proptypes from 'prop-types';

class Button extends React.Component {
  render() {
    const { onClick, disabled } = this.props;
    return (
      <section>
        <button
          type="submit"
          onClick={ onClick }
          disabled={ disabled }
        >
          Entrar
        </button>
      </section>
    );
  }
}

Button.propTypes = {
  onClick: Proptypes.func,
  disabled: Proptypes.func,
}.isRequired;

export default Button;
