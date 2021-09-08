import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import Header from '../components/Header';
import { fetchCoins } from '../actions';
import Header from '../components/Header';
import Forms from '../components/Forms';
// import Forms from '../components/Forms';

class Wallet extends React.Component {
  componentDidMount() {
    const { addCurrency } = this.props;
    addCurrency();
  }

  render() {
    return (
      <>
        <Header />
        <Forms />
      </>
    );
  }
}

Wallet.propTypes = {
  addCurrency: PropTypes.array,
}.isRequired;

const mapDispatchToProps = (dispatch) => ({
  addCurrency: () => dispatch(fetchCoins()),
});

const mapStateToProps = ({ wallet: { currencies } }) => ({
  currencies,
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
