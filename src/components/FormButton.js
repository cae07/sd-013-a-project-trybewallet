import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FormButton extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    const { onof, onClick } = this.props;

    return (
      <button
        type="submit"
        disabled={ onof }
        onClick={ onClick }
      >
        LogIn
      </button>
    );
  }
}

FormButton.propTypes = {
  onof: PropTypes.bool,
  onClick: PropTypes.func,
}.isRequired;

export default FormButton;
