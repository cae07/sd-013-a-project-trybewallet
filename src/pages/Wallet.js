import React from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import { setInfoDespesa } from '../actions';
import FormDespesa from '../components/FormDespesa';
import Header from '../components/Header';

class Wallet extends React.Component {
  render() {
    return (
      <div className="wallet">
        <Header />
        <FormDespesa />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatchSetDespesa: (infoDespesa) => dispatch(setInfoDespesa(infoDespesa)),
});

export default connect(null, mapDispatchToProps)(Wallet);
