import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  const { name, text, id, className, testID, onClick } = props;

  return (
    <div>
      <button
        type="submit"
        name={ name }
        id={ id }
        className={ className }
        data-testid={ testID }
        onClick={ onClick }
      >
        { text }
      </button>
    </div>
  );
}

const { string, func } = PropTypes;

Button.propTypes = {
  name: string,
  text: string,
  id: string,
  className: string,
  testID: string,
  onClick: func,
}.isRequired;

export default Button;
