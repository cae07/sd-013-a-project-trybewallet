import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const { name, type } = this.props;
    return (
      <label htmlFor={ name }>
        {name}
        <input type={ type } name={ name } id={ name } />
      </label>
    );
  }
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default Input;
