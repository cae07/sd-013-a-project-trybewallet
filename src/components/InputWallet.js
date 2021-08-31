import React from 'react';
import PropTypes from 'prop-types';

class InputWallet extends React.Component {
  render() {
    const { label, type, name, id, value, onChange } = this.props;
    return (
      <label htmlFor={ name }>
        { label }
        <input
          type={ type }
          name={ name }
          id={ id }
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

InputWallet.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputWallet;
