import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  returnButton() {
    const { data: { value, currency, method, tag }, name, onClick } = this.props;

    if (value.length > 0 && currency.length > 0 && method.length > 0 && tag.length > 0) {
      return <input type="button" value={ name } onClick={ onClick } />;
    }
    return <input type="button" value={ name } onClick={ onClick } disabled />;
  }

  render() {
    return this.returnButton();
  }
}

Button.propTypes = {
  data: PropTypes.shape({
    value: PropTypes.string,
    method: PropTypes.string,
    tag: PropTypes.string,
    currency: PropTypes.string,
  }).isRequired,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
