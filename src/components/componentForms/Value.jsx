import React from 'react';
import PropTypes from 'prop-types';

class Value extends React.Component {
  render() {
    const { value, onChange } = this.props;

    return (
      <div className="col">
        <label
          htmlFor="input-valor"
          className="form-label"
        >
          Valor
          <input
            type="text"
            id="input-valor"
            onChange={ onChange }
            value={ value }
            name="value"
            className="form-control"
          />
        </label>
      </div>
    );
  }
}

Value.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Value;
