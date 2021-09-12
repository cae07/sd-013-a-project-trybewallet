import React from 'react';
import PropTypes from 'prop-types';

class Currency extends React.Component {
  render() {
    const { onChange, currency } = this.props;

    return (
      <label htmlFor="input-moeda">
        Moeda
        <select
          name="currency"
          id="input-moeda"
          onChange={ onChange }
          value={ currency }
          name="description"
        >
        </select>
      </label>
    );
  }
}

Currency.propTypes = {
  currency: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Currency;
