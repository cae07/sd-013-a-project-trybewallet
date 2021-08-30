import React from 'react';
import PropTypes from 'prop-types';

function Button({ text, classN, onClick }) {
  return (
    <button className={ classN } type="button" onClick={ onClick }>
      {text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  classN: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
