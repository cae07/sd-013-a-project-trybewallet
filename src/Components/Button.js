import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Button extends Component {
  render() {
    const { onClick } = this.props;
    return (
      <button
        type="button"
        onClick={ onClick }
      >
        Adicionar despesa
      </button>

    );
  }
}
Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;
