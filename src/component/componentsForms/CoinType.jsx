import React from 'react';
import PropTypes from 'prop-types';

class CoinType extends React.Component {
  render() {
    const { onChange, value } = this.props;
    return (
      <label htmlFor="input-change">
        Moeda
        <select
          onChange={ onChange }
          name="coin"
          value={ value }
          id="input-change"
        >
          <option value="empty">0</option>
        </select>
      </label>
    );
  }
}

CoinType.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default CoinType;
