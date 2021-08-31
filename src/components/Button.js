import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Button extends Component {
  render() {
    const { disabled } = this.props;
    return (
      <Link to="/carteira">
        <button
          type="submit"
          disabled={ disabled }
        >
          Entrar
        </button>
      </Link>
    );
  }
}

Button.propTypes = {
  disabled: PropTypes.bool,
}.isRequired;

export default Button;
