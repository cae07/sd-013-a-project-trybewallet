import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  const { name, text, id, className, testID, onClick, disabled } = props;

  return (
    <div>
      <button
        type="submit"
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
  name: string,
  text: string,
  id: string,
  className: string,
  testID: string,
  onClick: func,
  disabled: bool,
}.isRequired;

export default Button;
