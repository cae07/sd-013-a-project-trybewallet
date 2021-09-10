import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  const { type, name, text, id, className, testID, onClick, disabled } = props;

  return (
    <div>
      <button
        type={ type ? 'button' : 'submit' }
        name={ name }
        id={ id }
        className={ className }
        data-testid={ testID }
        onClick={ onClick }
        disabled={ disabled }
      >
        { text }
      </button>
    </div>
  );
}

const { string, func, bool } = PropTypes;

Button.propTypes = {
  type: string,
  name: string,
  text: string,
  id: string,
  className: string,
  testID: string,
  onClick: func,
  disabled: bool,
}.isRequired;

export default Button;
