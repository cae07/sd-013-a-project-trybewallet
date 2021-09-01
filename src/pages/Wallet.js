import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Form from '../component/Form';
import Header from '../component/Header';
import { fetchCoinsWhitThunk } from '../actions';

class Wallet extends React.Component {
  componentDidMount() {
    const { myCoins } = this.props;
    myCoins();
  }

  render() {
    return (
      <>
        <Header />
        <Form />
      </>
    );
  }
}

Wallet.propTypes = {
  myCoins: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  myCoins: () => dispatch(fetchCoinsWhitThunk()),
});

export default connect(null, mapDispatchToProps)(Wallet);
