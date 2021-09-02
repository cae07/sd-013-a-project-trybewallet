import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LoginButton extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    const { disabled, onClick, id } = this.props;

    return (
      <button
        id={ id }
        type="submit"
        disabled={ disabled }
        onClick={ onClick }
      >
        Entrar
      </button>
    );
  }
}

LoginButton.propTypes = {
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  id: PropTypes.string,
}.isRequired;

export default LoginButton;
