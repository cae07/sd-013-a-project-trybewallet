import React from 'react';
import { connect } from 'react-redux';
import { allMoedas } from '../actions';
import Forms from '../components/Forms';
import Header from '../components/Header';

class Wallet extends React.Component {
  componentDidMount() {
    const { dispatchFetch } = this.props;
    dispatchFetch();
  }

  render() {
    console.log(this.props);
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

export default connect(null, mapDispatchToprops)(Wallet);
