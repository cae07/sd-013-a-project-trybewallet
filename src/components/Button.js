import React from 'react';
import Proptypes from 'prop-types';

class Button extends React.Component {
  render() {
    const { onClick, disabled, name } = this.props;
    return (
      <section>
        <button
          type="button"
          onClick={ onClick }
          disabled={ disabled }
        >
          { name }
        </button>
      </section>
    );
  }
}

Button.propTypes = {
  onClick: Proptypes.func,
  disabled: Proptypes.func,
  name: Proptypes.string,
}.isRequired;

export default Button;
