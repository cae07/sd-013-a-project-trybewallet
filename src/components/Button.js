import React from 'react';
import Proptypes from 'prop-types';

class Button extends React.Component {
  render() {
    const { onClick } = this.props;
    return (
      <section>
        <button
          type="submit"
          onClick={ onClick }
        >
          Entrar
        </button>
      </section>
    );
  }
}

Button.propTypes = {
  onClick: Proptypes.func,
}.isRequired;

export default Button;
