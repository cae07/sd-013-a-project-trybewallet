import React from 'react';
import Proptypes from 'prop-types';

class Button extends React.Component {
  render() {
    const { onClick, disabled, name, type } = this.props;
    return (
      <section>
        <button
          // eslint-disable-next-line react/button-has-type
          type={ `${type}` }
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
  type: Proptypes.string,
}.isRequired;

export default Button;
