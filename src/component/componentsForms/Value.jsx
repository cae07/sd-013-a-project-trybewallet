import React from 'react';
import PropTypes from 'prop-types';

class Value extends React.Component {
  render() {
    const { onChange, value } = this.props;
    return (
      <label htmlFor="input-value">
        Valor
        <input
          onChange={ onChange }
          name="value"
          value={ value }
          type="text"
          id="input-value"
        />
      </label>
    );
  }
}

Value.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Value;
