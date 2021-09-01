import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class MapSelect extends React.Component {
  render() {
    const { allCoinsFromStore } = this.props;
    const acronyms = Object.keys(allCoinsFromStore);
    return (
      acronyms
        .filter((acronym) => acronym !== 'USDT')
        .map((data, index) => <option key={ index }>{ data }</option>)
    );
  }
}

MapSelect.propTypes = {
  allCoinsFromStore: PropTypes.objectOf(PropTypes.shape).isRequired,
};

const mapStateToProps = (state) => ({
  allCoinsFromStore: state.wallet.coinsJson,
});

export default connect(mapStateToProps)(MapSelect);
