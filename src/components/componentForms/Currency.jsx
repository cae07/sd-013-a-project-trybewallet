import React from 'react';
import PropTypes from 'prop-types';

class Currency extends React.Component {
  render() {
    const { onChange, currency, fetch } = this.props;
    const fetchKeys = Object.keys(fetch);
    const filteredCurrencies = fetchKeys.filter((data) => data !== 'USDT');

    return (
      <div className="col">
        <label
          htmlFor="input-moeda"
          className="form-label"
        >
          Moeda
          <select
            name="currency"
            id="input-moeda"
            onChange={ onChange }
            value={ currency }
            className="form-select"
          >
            {filteredCurrencies
              .map((item, index) => (
                <option key={ index } value={ item }>
                  { item }
                </option>))}
          </select>
        </label>
      </div>
    );
  }
}

Currency.propTypes = {
  currency: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  fetch: PropTypes.objectOf(PropTypes.shape).isRequired,
};

export default Currency;
