import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { allMoedas } from '../actions';
import Forms from '../components/Forms';
import Header from '../components/Header';

class Wallet extends React.Component {
  componentDidMount() {
    const { dispatchFetch } = this.props;
    dispatchFetch();
  }

  render() {
    return (
      <>
        <div>TrybeWallet</div>
        <Header />
        <Forms />
      </>
    );
  }
}
const mapDispatchToprops = () => (dispatch) => ({
  dispatchFetch: () => dispatch(allMoedas()),
});
Wallet.propTypes = {
  dispatchFetch: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToprops)(Wallet);
