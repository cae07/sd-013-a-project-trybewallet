import PropTypes from 'prop-types';
import React, { Component } from 'react';

class ButtonAdd extends Component {
  render() {
    const { onClick } = this.props;
    return (
      <button type="button" onClick={ onClick }>
        Adicionar despesa
      </button>
    );
  }
}

ButtonAdd.propTypes = {
  onClick: PropTypes.func,
}.isRequired;

export default ButtonAdd;
