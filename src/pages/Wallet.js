import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCurrenciesWithThunk } from '../actions';
import HeaderWallet from '../components/HeaderWallet';
import InputsWallet from '../components/InputsWallet';
import SelectsWallet from '../components/SelectsWallet';

class Wallet extends React.Component {
  /* constructor(props) {
    super(props);
    this.state = {
      currencies: [],
      expenses: [],
    };
  } */

  componentDidMount() {
    const { getCurrenciesPayload } = this.props;
    getCurrenciesPayload();
  }

  render() {
    return (
      <div>
        <HeaderWallet />
        <InputsWallet />
        <SelectsWallet />
      </div>
    );
  }
}

Wallet.propTypes = {
  getCurrenciesPayload: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  getCurrenciesPayload: () => dispatch(fetchCurrenciesWithThunk()),
});

export default connect(null, mapDispatchToProps)(Wallet);
