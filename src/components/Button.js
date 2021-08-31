import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Button extends Component {
  render() {
    const { disabled, onClick } = this.props;
    return (
      <Link to="/carteira">
        <button
          type="submit"
          disabled={ disabled }
          onClick={ onClick }
        >
          Entrar
        </button>
      </Link>
    );
  }
}

Button.propTypes = {
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
}.isRequired;

export default Button;
