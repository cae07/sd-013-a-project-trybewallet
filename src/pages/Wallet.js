import React from 'react';
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

/* const mapStateToProps = (state) => ({
  user: state.user,
});

Wallet.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string.isRequired,
  }).isRequired,
}; */

export default Wallet;
