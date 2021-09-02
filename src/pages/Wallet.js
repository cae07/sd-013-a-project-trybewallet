import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Form from '../components/form';
import Header from '../components/header';
import { walletFetch } from '../actions';

class Wallet extends React.Component {
  componentDidMount() {
    const { walletFetch } = this.props;
    walletFetch();
  }

  render() {
    return (
      <main>
        <Header />
        <Form />
      </main>
    );
  }
}

Wallet.propTypes = {
  walleetFetch: PropTypes.array,
}.isRequired;

const mapDispatchToProps = (dispatch) => ({
  walletFetch: (payload) => dispatch(walletFetch(payload)),
});

export default connect(null, mapDispatchToProps)(Wallet);
