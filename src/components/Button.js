import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    const { name, onHandleClick } = this.props;
    return (
      <button type="button" onClick={ onHandleClick }>
        {name}
      </button>
    );
  }
}

Button.propTypes = {
  name: PropTypes.string,
  onHandleClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  name: 'Enviar',
};

export default Button;
