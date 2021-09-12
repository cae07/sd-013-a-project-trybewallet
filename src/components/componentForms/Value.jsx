import React from 'react';
import PropTypes from 'prop-types';

class Value extends React.Component {
  render() {
    const { value, onChange } = this.props;

    return (
      <label htmlFor="input-valor">
        Valor
        <input
          type="text"
          id="input-valor"
          onChange={ onChange }
          value={ value }
          name="value"
        />
      </label>
    );
  }
}

Value.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Value;
