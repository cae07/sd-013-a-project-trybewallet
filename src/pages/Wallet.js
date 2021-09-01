import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { InputWallet, SelectCoin, Payment, Header, TagSelect } from '../components';
import { fetchAPI } from '../actions';

class Wallet extends Component {
  componentDidMount() {
    const { getAPI } = this.props;
    getAPI();
  }

  render() {
    return (
      <main>
        <Header />
        <form>
          <InputWallet />
          <SelectCoin />
          <Payment />
          <TagSelect />
        </form>
      </main>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getAPI: () => dispatch(fetchAPI()),
});

Wallet.propTypes = {
  getAPI: PropTypes.func,
}.isRequired;

export default connect(null, mapDispatchToProps)(Wallet);
