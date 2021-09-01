import React from 'react';
import PropTypes from 'prop-types';
import MapSelect from '../../Helpers/MapSelect';

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
          <MapSelect />
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
