import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

class Button extends React.Component {
  render() {
    const { onSubmit } = this.props;
    return (
      <div>
        <button
          className="button-wallet"
          type="button"
          onClick={ onSubmit }
        >
          Adicionar despesas
        </button>
      </div>
    );
  }
}

Button.propTypes = {
  onSubmit: PropTypes.func,
}.isRequired;

export default Button;
