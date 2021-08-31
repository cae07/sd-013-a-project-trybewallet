import React from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import { setInfoDespesa, getCurrencies } from '../actions';
import Expense from '../components/Expense';
import Header from '../components/Header';

class Wallet extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  componentDidMount() {
    const wallet = this.props;
    getCurrencies();
    console.log(wallet);
  }

  render() {
    return (
      <div className="wallet">
        <Header />
        <Expense />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatchSetDespesa: (infoDespesa) => dispatch(setInfoDespesa(infoDespesa)),
});

export default connect(null, mapDispatchToProps)(Wallet);
