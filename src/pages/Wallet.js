import React from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import { setInfoDespesa } from '../actions';
import FormDespesa from '../components/FormDespesa';
import Topo from '../components/Topo';

class Wallet extends React.Component {
  render() {
    return (
      <div className="wallet">
        <Topo />
        <FormDespesa />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatchSetDespesa: (infoDespesa) => dispatch(setInfoDespesa(infoDespesa)),
});

export default connect(null, mapDispatchToProps)(Wallet);
